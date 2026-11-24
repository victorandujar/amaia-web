const desktop = window.matchMedia("(min-width: 761px)");

/**
 * Opens and closes the mobile menu. The open state lives on `root` (`data-open`), so the burger,
 * the sidebar and its entries animate with Tailwind `group-data-open:` utilities.
 */
export function setupMobileMenu(root: HTMLElement): void {
  const toggle = root.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const menu = root.querySelector<HTMLElement>("[data-menu]");
  const backdrop = root.querySelector<HTMLElement>("[data-menu-backdrop]");
  if (!toggle || !menu) return;

  const labels = {
    open: toggle.dataset.labelOpen ?? "",
    close: toggle.dataset.labelClose ?? "",
  };
  const isOpen = (): boolean => root.hasAttribute("data-open");

  const setOpen = (open: boolean, { returnFocus = true } = {}): void => {
    root.toggleAttribute("data-open", open);
    menu.inert = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? labels.close : labels.open);
    // The page behind stays still while the menu is open.
    document.documentElement.classList.toggle("menu-open", open);
    if (open) menu.querySelector("a")?.focus({ preventScroll: true });
    else if (returnFocus) toggle.focus({ preventScroll: true });
  };

  toggle.addEventListener("click", () => setOpen(!isOpen()));
  backdrop?.addEventListener("click", () => setOpen(false));
  menu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a"))
      setOpen(false, { returnFocus: false });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) setOpen(false);
  });
  desktop.addEventListener("change", (event) => {
    if (event.matches && isOpen()) setOpen(false, { returnFocus: false });
  });
}
