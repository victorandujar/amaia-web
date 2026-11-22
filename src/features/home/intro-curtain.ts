import { introGrids } from "./intro-grid";

/** Timings from the design (ms). */
const LOGO_FADE_IN = { delay: 150, duration: 900 };
const LOGO_SPLITS_AT = 1100;
const CELL_STEP = 60;
const CURTAIN_ENDS_AT = 3100;

const CURTAIN_COLOR = "#3d2036";
const LOGO_SIZE = {
  desktop: { width: 330, height: 106 },
  mobile: { width: 264, height: 84.8 },
};

interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Each cell fades in two steps (opacity 1 → 0.5 → 0), like the design's `steps(2)`. */
function cellOpacity(elapsed: number, delay: number): number {
  if (elapsed < delay + CELL_STEP) return 1;
  if (elapsed < delay + CELL_STEP * 2) return 0.5;
  return 0;
}

function intersect(a: Rect, b: Rect): Rect | null {
  const x = Math.max(a.x, b.x);
  const y = Math.max(a.y, b.y);
  const right = Math.min(a.x + a.width, b.x + b.width);
  const bottom = Math.min(a.y + a.height, b.y + b.height);
  if (right <= x || bottom <= y) return null;
  return { x, y, width: right - x, height: bottom - y };
}

export function playIntro(curtain: HTMLElement): void {
  // While the curtain is up the page can't be scrolled (`.intro` on <html>) nor reached by keyboard.
  const page = curtain.closest("main");
  const endIntro = (): void => {
    curtain.remove();
    page?.removeAttribute("inert");
    document.documentElement.classList.remove("intro");
  };

  const canvas = curtain.querySelector("canvas");
  const logo = curtain.querySelector("img");
  const context = canvas?.getContext("2d");
  if (!canvas || !logo || !context) {
    endIntro();
    return;
  }

  page?.setAttribute("inert", "");

  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  const grid = isMobile ? introGrids.mobile : introGrids.desktop;
  const logoSize = isMobile ? LOGO_SIZE.mobile : LOGO_SIZE.desktop;

  const ratio = window.devicePixelRatio || 1;
  const width = curtain.clientWidth;
  const height = curtain.clientHeight;
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  context.scale(ratio, ratio);

  const logoRect: Rect = {
    x: width / 2 - logoSize.width / 2,
    y: height / 2 - logoSize.height / 2,
    ...logoSize,
  };

  const cells: (Rect & { delay: number })[] = grid.delays.map(
    (delay, index) => {
      const column = index % grid.columns;
      const row = Math.floor(index / grid.columns);
      const x = Math.floor((column * width) / grid.columns);
      const y = Math.floor((row * height) / grid.rows);
      return {
        x,
        y,
        width: Math.floor(((column + 1) * width) / grid.columns) - x,
        height: Math.floor(((row + 1) * height) / grid.rows) - y,
        delay,
      };
    },
  );

  logo.animate(
    [
      { opacity: 0, filter: "blur(8px)" },
      { opacity: 1, filter: "blur(0)" },
    ],
    { ...LOGO_FADE_IN, easing: "ease-out", fill: "both" },
  );

  const drawLogoPiece = (cell: Rect): void => {
    const piece = intersect(cell, logoRect);
    if (!piece) return;
    const scaleX = logo.naturalWidth / logoRect.width;
    const scaleY = logo.naturalHeight / logoRect.height;
    context.drawImage(
      logo,
      (piece.x - logoRect.x) * scaleX,
      (piece.y - logoRect.y) * scaleY,
      piece.width * scaleX,
      piece.height * scaleY,
      piece.x,
      piece.y,
      piece.width,
      piece.height,
    );
  };

  const start = performance.now();
  let logoSplit = false;

  const frame = (now: number): void => {
    const elapsed = now - start;
    if (elapsed >= CURTAIN_ENDS_AT) {
      endIntro();
      return;
    }

    if (!logoSplit && elapsed >= LOGO_SPLITS_AT) {
      // From here the wordmark lives in the cells, so it dissolves with them.
      logoSplit = true;
      logo.remove();
    }

    context.clearRect(0, 0, width, height);
    for (const cell of cells) {
      const opacity = cellOpacity(elapsed, cell.delay);
      if (opacity === 0) continue;
      context.globalAlpha = opacity;
      context.fillStyle = CURTAIN_COLOR;
      context.fillRect(cell.x, cell.y, cell.width, cell.height);
      if (logoSplit) drawLogoPiece(cell);
    }
    context.globalAlpha = 1;

    requestAnimationFrame(frame);
  };

  // The canvas now paints the curtain, so the element's own background can go.
  curtain.classList.remove("bg-aubergine");
  requestAnimationFrame(frame);
}
