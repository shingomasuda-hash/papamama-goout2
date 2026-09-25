import type { ReactNode } from "react";
import { CTA_URL, type CtaType } from "../cta";

type Props = {
  type: CtaType;
  position: string;
  className?: string;
  children: ReactNode;
};

/**
 * CTA リンク。GTM でボタン別・設置場所別に計測できるよう
 * data-cta / data-cta-position を必ず付与する。
 */
export function Cta({ type, position, className, children }: Props) {
  return (
    <a href={CTA_URL[type]} className={className} data-cta={type} data-cta-position={position}>
      {children}
    </a>
  );
}
