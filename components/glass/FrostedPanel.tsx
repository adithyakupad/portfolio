import type { ElementType, ReactNode } from "react";
import { cx } from "@/lib/utils";

type Props = { as?: ElementType; tone?: "light" | "dark" | "red"; className?: string; children: ReactNode };

export function FrostedPanel({ as: Tag = "div", tone = "light", className, children }: Props) {
  return <Tag className={cx("frosted-panel", `frosted-panel--${tone}`, className)}>{children}</Tag>;
}
