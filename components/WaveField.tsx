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
      const count = Math.max(55, Math.min(160, Math.round(width / 10)));
      const stepY = width < 700 ? 13 : 11;
      pointer.x += (pointer.targetX - pointer.x) * .13;
      pointer.y += (pointer.targetY - pointer.y) * .13;
      pointer.strength += (pointer.targetStrength - pointer.strength) * .07;
      context.lineWidth = width < 700 ? .8 : 1;
      for (let index = 0; index < count; index++) {
        const baseX = (index / (count - 1)) * width;
        context.beginPath();
        for (let y = -14; y <= height + 14; y += stepY) {
          const ambient = Math.sin(y * .012 + index * .19 + time * .00022) * 3.2
            + Math.sin(y * .026 - index * .075 - time * .0003) * 1.7;
          const dx = baseX - pointer.x;
          const dy = y - pointer.y;
          const distance = Math.hypot(dx, dy);
          const influence = Math.exp(-(distance * distance) / 39000) * pointer.strength;
          const ripple = Math.sin(distance * .046 - time * .0043) * 33 * influence;
          const x = baseX + ambient + ripple;
          if (y === -14) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.strokeStyle = index % 13 === 0 ? "rgba(245,247,244,.75)" : "rgba(218,230,232,.53)";
        context.stroke();
      }
    };

    const animate = (time: number) => {
      if (time - previous >= (width < 700 ? 32 : 16)) {
        draw(time);
        previous = time;
      }
      if (visible) frame = requestAnimationFrame(animate);
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
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reducedMotion) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(animate);
      }
      else cancelAnimationFrame(frame);
    });
    visibility.observe(host);
    if (!reducedMotion) {
      host.addEventListener("pointermove", move);
      host.addEventListener("pointerleave", leave);
    }
    return () => {
      observer.disconnect();
      visibility.disconnect();
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <canvas className="wave-field__canvas" ref={canvasRef} aria-hidden="true" />;
}
