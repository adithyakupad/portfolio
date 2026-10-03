"use client";

import { useState, type ReactNode, type PointerEvent } from "react";

export function InteractiveMedia({ children, label }: { children: ReactNode; label: string }) {
  const [paused, setPaused] = useState(false);

  const moveLens = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    event.currentTarget.style.setProperty("--lens-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--lens-y", `${y * 100}%`);
    event.currentTarget.style.setProperty("--drift-x", `${(x - .5) * -12}px`);
    event.currentTarget.style.setProperty("--drift-y", `${(y - .5) * -12}px`);
  };

  return (
    <div className="interactive-media" data-paused={paused} onPointerMove={moveLens} onPointerLeave={(event) => {
      event.currentTarget.style.setProperty("--drift-x", "0px");
      event.currentTarget.style.setProperty("--drift-y", "0px");
    }}>
      <div className="interactive-media__art">{children}</div>
      <span className="interactive-media__cue micro" aria-hidden="true">MOVE TO INSPECT / {label.toUpperCase()}</span>
      <button className="interactive-media__control liquid-surface micro" type="button" aria-label={`${paused ? "Play" : "Pause"} ${label} animation`} aria-pressed={paused} onClick={() => setPaused((value) => !value)}>
        <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>{paused ? "PLAY" : "PAUSE"}
      </button>
    </div>
  );
}
