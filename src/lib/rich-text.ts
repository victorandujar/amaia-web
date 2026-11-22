/** Copy with the few inline accents the design uses: italic words and forced line breaks. */
export type RichSegment = string | { em: string } | { br: true };

export type RichText = readonly RichSegment[];
