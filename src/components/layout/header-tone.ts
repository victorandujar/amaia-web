type Tone = "light" | "dark";
type Rgb = [number, number, number];

const swatch = document
  .createElement("canvas")
  .getContext("2d", { willReadFrequently: true });

/** Reads any CSS color (rgb, color-mix, oklab…) through a 1px canvas. */
function toRgba(color: string): [number, number, number, number] | null {
  if (!swatch) return null;
  swatch.clearRect(0, 0, 1, 1);
  swatch.fillStyle = color;
  swatch.fillRect(0, 0, 1, 1);
  const [r = 0, g = 0, b = 0, a = 0] = swatch.getImageData(0, 0, 1, 1).data;
  return [r, g, b, a];
}

/** Nearest opaque background painted at a point of the screen, ignoring the header itself. */
function backgroundAt(x: number, y: number, header: HTMLElement): Rgb | null {
  const element = document
    .elementsFromPoint(x, y)
    .find((candidate) => !header.contains(candidate));
  for (
    let node: Element | null = element ?? null;
    node;
    node = node.parentElement
  ) {
    const rgba = toRgba(getComputedStyle(node).backgroundColor);
    if (rgba && rgba[3] > 128) return [rgba[0], rgba[1], rgba[2]];
  }
  return null;
}

function toneFor([r, g, b]: Rgb): Tone {
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.5 ? "light" : "dark";
}

/** Keeps the header's text readable over whatever section lies beneath it. */
export function followBackground(header: HTMLElement): void {
  let pending = false;

  const update = (): void => {
    pending = false;
    const background = backgroundAt(
      window.innerWidth / 2,
      header.offsetHeight / 2,
      header,
    );
    if (background) header.dataset.tone = toneFor(background);
  };

  const schedule = (): void => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  update();
}
