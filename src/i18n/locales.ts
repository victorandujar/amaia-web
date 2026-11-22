export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Spanish is the source language of every copy; English mirrors it. */
export type Localized<T> = Record<Locale, T>;
