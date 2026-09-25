export const CTA_URL = {
  consultation: "https://s.lmes.jp/landing-qr/2007227153-vjoL5182?uLand=8DfPMx",
  "paint-event": "https://s.lmes.jp/landing-qr/2007227153-vjoL5182?uLand=Z9vBMh",
} as const;

export type CtaType = keyof typeof CTA_URL;
