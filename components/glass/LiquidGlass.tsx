"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cx } from "@/lib/utils";

type Props = {
  as?: "div" | "button";
  tone?: "light" | "dark" | "red";
  type?: "button" | "submit" | "reset";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export function LiquidGlass({ as: Tag = "div", tone = "light", type, className, children, onClick }: Props) {
  const ref = useRef<HTMLDivElement & HTMLButtonElement>(null);

  const moveHighlight = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    ref.current?.style.setProperty("--light-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    ref.current?.style.setProperty("--light-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  const resetHighlight = () => {
    ref.current?.style.setProperty("--light-x", "50%");
    ref.current?.style.setProperty("--light-y", "0%");
  };

  const shared = {
    className: cx("liquid-glass", `liquid-glass--${tone}`, className),
    onPointerMove: moveHighlight,
    onPointerLeave: resetHighlight,
  };

  if (Tag === "button") {
    return <button {...shared} ref={ref} type={type ?? "button"} onClick={onClick}>{children}</button>;
  }
  return <div {...shared} ref={ref}>{children}</div>;
}
