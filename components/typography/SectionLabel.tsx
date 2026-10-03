import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cx("section-label", className)}>{children}</span>;
}
