"use client";

import { useEffect, useRef } from "react";

// Marching squares edges are ordered clockwise: top, right, bottom, left.
const contourEdges: number[][] = [
  [], [3, 0], [0, 1], [3, 1], [1, 2], [3, 0, 1, 2], [0, 2], [3, 2],
  [2, 3], [0, 2], [0, 1, 2, 3], [1, 2], [1, 3], [0, 1], [0, 3], [],
];

export function WaveField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !host || !context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, strength: 0, targetStrength: 0, direction: 1, dragging: false };
    let width = 0;
    let height = 0;
    let columns = 0;
    let rows = 0;
    let cellWidth = 0;
    let cellHeight = 0;
    let heights = new Float32Array(0);
    let frame = 0;
    let previous = 0;
    let visible = false;

    const draw = (time: number) => {
      if (!width || !height) return;
      context.clearRect(0, 0, width, height);
      const ease = motion.matches ? 1 : .14;
      pointer.x += (pointer.targetX - pointer.x) * ease;
      pointer.y += (pointer.targetY - pointer.y) * ease;
      pointer.strength += (pointer.targetStrength - pointer.strength) * (motion.matches ? 1 : .105);

      const phase = motion.matches ? 0 : time * .00016;
      const px = pointer.x / width;
      const py = pointer.y / height;
      const aspect = width / height;
      for (let row = 0; row < rows; row++) {
        const v = row / (rows - 1);
        for (let column = 0; column < columns; column++) {
          const u = column / (columns - 1);
          const hillA = Math.exp(-(((u - .22) / .3) ** 2 + ((v - .55) / .4) ** 2));
          const hillB = Math.exp(-(((u - .77) / .25) ** 2 + ((v - .36) / .33) ** 2));
          const valley = Math.exp(-(((u - .51) / .31) ** 2 + ((v - .79) / .28) ** 2));
          const dx = (u - px) * aspect;
          const dy = v - py;
          const touch = Math.exp(-(dx * dx + dy * dy) / .052) * pointer.strength * pointer.direction;
          heights[row * columns + column] = .75 * hillA + .66 * hillB - .4 * valley
            + .18 * Math.sin(u * 11 + v * 4.5 + phase) * Math.cos(v * 7 - u * 2.8 - phase * .7)
            + .13 * Math.sin(u * 6 - v * 9 + phase * .5) + .83 * touch;
        }
      }

      context.lineJoin = "round";
      context.lineCap = "round";
      for (let index = 0; index < 17; index++) {
        const level = -.39 + index * .105;
        context.beginPath();
        for (let row = 0; row < rows - 1; row++) {
          const y = row * cellHeight;
          for (let column = 0; column < columns - 1; column++) {
            const x = column * cellWidth;
            const i = row * columns + column;
            const a = heights[i];
            const b = heights[i + 1];
            const c = heights[i + columns + 1];
            const d = heights[i + columns];
            const mask = (a >= level ? 1 : 0) | (b >= level ? 2 : 0) | (c >= level ? 4 : 0) | (d >= level ? 8 : 0);
            const edges = contourEdges[mask];
            if (!edges.length) continue;
            const top = (level - a) / (b - a);
            const right = (level - b) / (c - b);
            const bottom = (level - d) / (c - d);
            const left = (level - a) / (d - a);
            const xs = [x + top * cellWidth, x + cellWidth, x + bottom * cellWidth, x];
            const ys = [y, y + right * cellHeight, y + cellHeight, y + left * cellHeight];
            for (let edge = 0; edge < edges.length; edge += 2) {
              context.moveTo(xs[edges[edge]], ys[edges[edge]]);
              context.lineTo(xs[edges[edge + 1]], ys[edges[edge + 1]]);
            }
          }
        }
        const major = index % 4 === 0;
        context.strokeStyle = major ? "rgba(239,248,246,.78)" : "rgba(205,226,230,.45)";
        context.lineWidth = major ? 1.35 : .8;
        context.stroke();
      }

      if (pointer.dragging && pointer.strength > .05) {
        context.beginPath();
        context.arc(pointer.x, pointer.y, 9, 0, Math.PI * 2);
        context.strokeStyle = "rgba(255,240,212,.86)";
        context.lineWidth = 1;
        context.stroke();
        context.beginPath();
        context.arc(pointer.x, pointer.y, 2, 0, Math.PI * 2);
        context.fillStyle = "#fff5e8";
        context.fill();
      }
    };

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
      const step = width < 700 ? 13 : 17;
      columns = Math.ceil(width / step) + 1;
      rows = Math.ceil(height / step) + 1;
      cellWidth = width / (columns - 1);
      cellHeight = height / (rows - 1);
      heights = new Float32Array(columns * rows);
      pointer.x = pointer.targetX = width * .5;
      pointer.y = pointer.targetY = height * .5;
      draw(0);
    };

    const animate = (time: number) => {
      if (time - previous >= (width < 700 ? 42 : 30)) {
        draw(time);
        previous = time;
      }
      if (visible && document.visibilityState === "visible" && !motion.matches) frame = requestAnimationFrame(animate);
    };
    const resume = () => {
      cancelAnimationFrame(frame);
      if (visible && !motion.matches && document.visibilityState === "visible") frame = requestAnimationFrame(animate);
      else if (motion.matches) draw(0);
    };
    const move = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointer.targetX = Math.max(0, Math.min(width, event.clientX - rect.left));
      pointer.targetY = Math.max(0, Math.min(height, event.clientY - rect.top));
      pointer.direction = event.altKey ? -1 : 1;
      pointer.targetStrength = pointer.dragging ? 1.55 : .75;
      if (motion.matches) draw(0);
    };
    const down = (event: PointerEvent) => {
      pointer.dragging = true;
      move(event);
    };
    const up = () => {
      pointer.dragging = false;
      pointer.targetStrength = .75;
      if (motion.matches) draw(0);
    };
    const leave = () => {
      pointer.dragging = false;
      pointer.targetStrength = 0;
      if (motion.matches) draw(0);
    };
    const key = (event: KeyboardEvent) => {
      const delta = 38;
      if (event.key === "ArrowLeft") pointer.targetX -= delta;
      else if (event.key === "ArrowRight") pointer.targetX += delta;
      else if (event.key === "ArrowUp") pointer.targetY -= delta;
      else if (event.key === "ArrowDown") pointer.targetY += delta;
      else if (event.key === " ") pointer.direction *= -1;
      else return;
      event.preventDefault();
      pointer.targetX = Math.max(0, Math.min(width, pointer.targetX));
      pointer.targetY = Math.max(0, Math.min(height, pointer.targetY));
      pointer.targetStrength = 1.4;
      if (motion.matches) draw(0);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(host);
    const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; resume(); });
    visibility.observe(host);
    document.addEventListener("visibilitychange", resume);
    motion.addEventListener("change", resume);
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerdown", down);
    host.addEventListener("pointerup", up);
    host.addEventListener("pointercancel", leave);
    host.addEventListener("pointerleave", leave);
    canvas.addEventListener("keydown", key);
    return () => {
      observer.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", resume);
      motion.removeEventListener("change", resume);
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerdown", down);
      host.removeEventListener("pointerup", up);
      host.removeEventListener("pointercancel", leave);
      host.removeEventListener("pointerleave", leave);
      canvas.removeEventListener("keydown", key);
    };
  }, []);

  return <canvas className="wave-field__canvas" ref={canvasRef} role="img" tabIndex={0} aria-label="Interactive topographic map. Drag or move the pointer to raise the contours. Use arrow keys to move the peak, and Space to invert it." />;
}
