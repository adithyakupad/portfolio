import type { ElementType, ReactNode } from "react";
import { cx } from "@/lib/utils";

type Props = {
  as?: ElementType;
  scale?: "hero" | "large" | "section";
  className?: string;
  children: ReactNode;
};

export function DisplayText({ as: Tag = "h1", scale = "large", className, children }: Props) {
  return <Tag className={cx("display-text", `display-text--${scale}`, className)}>{children}</Tag>;
}
