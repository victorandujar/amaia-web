/**
 * Scroll reveal, in the design's "aparecer" spirit: text and images surface from a blur.
 * Elements start hidden only when JavaScript runs (`.js` on <html>) and motion is allowed;
 * the observer in BaseLayout adds `data-inview` when they enter the viewport.
 * Pass a `delay-*` class alongside to stagger.
 */
export const reveal =
  "motion-safe:transition-[opacity,filter,translate] motion-safe:duration-1400 motion-safe:ease-materia motion-safe:in-[.js]:translate-y-3.5 motion-safe:in-[.js]:opacity-0 motion-safe:in-[.js]:blur-veil data-inview:translate-y-0 data-inview:opacity-100 data-inview:blur-none";

/** The design's "materia" entrance for hero words and pictures: matter condensing out of mist. */
export const materia =
  "motion-safe:transition-[opacity,filter] motion-safe:duration-2800 motion-safe:ease-materia motion-safe:in-[.js]:opacity-12 motion-safe:in-[.js]:blur-mist data-inview:opacity-100 data-inview:blur-none";
