"use client";

import { useEffect, useRef } from "react";

export function WaveField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !host || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let previous = 0;
    let visible = false;
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, strength: 0, targetStrength: 0 };

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      pointer.x = pointer.targetX = width * .5;
      pointer.y = pointer.targetY = height * .5;
      draw(0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const count = Math.max(60, Math.min(190, Math.round(width / 8)));
      const stepY = width < 700 ? 13 : 12;
      pointer.x += (pointer.targetX - pointer.x) * .13;
      pointer.y += (pointer.targetY - pointer.y) * .13;
      pointer.strength += (pointer.targetStrength - pointer.strength) * .07;
      context.lineWidth = width < 700 ? .8 : 1;
      for (let index = 0; index < count; index++) {
        const baseX = (index / (count - 1)) * width;
        context.beginPath();
        for (let y = -14; y <= height + 14; y += stepY) {
          const ambient = Math.sin(y * .013 + index * .075 + time * .00072) * 12
            + Math.sin(y * .031 - index * .052 - time * .0011) * 5.5
            + Math.sin(y * .007 + baseX * .006 + time * .00048) * 6;
          const dx = baseX - pointer.x;
          const dy = y - pointer.y;
          const distance = Math.hypot(dx, dy);
          const influence = Math.exp(-(distance * distance) / 52000) * pointer.strength;
          const ripple = Math.sin(distance * .046 - time * .0043) * 56 * influence;
          const x = baseX + ambient + ripple;
          if (y === -14) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.strokeStyle = index % 13 === 0 ? "rgba(245,247,244,.84)" : "rgba(218,230,232,.62)";
        context.stroke();
      }
    };

    const animate = (time: number) => {
      if (time - previous >= (width < 700 ? 32 : 16)) {
        draw(time);
        previous = time;
      }
      if (visible && document.visibilityState === "visible") frame = requestAnimationFrame(animate);
    };
    const move = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointer.targetX = event.clientX - rect.left;
      pointer.targetY = event.clientY - rect.top;
      pointer.targetStrength = 1;
    };
    const leave = () => { pointer.targetStrength = 0; };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    const resume = () => {
      cancelAnimationFrame(frame);
      if (visible && !reducedMotion && document.visibilityState === "visible") frame = requestAnimationFrame(animate);
    };
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      resume();
    });
    visibility.observe(host);
    document.addEventListener("visibilitychange", resume);
    if (!reducedMotion) {
      host.addEventListener("pointermove", move);
      host.addEventListener("pointerleave", leave);
    }
    return () => {
      observer.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", resume);
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <canvas className="wave-field__canvas" ref={canvasRef} aria-hidden="true" />;
}
