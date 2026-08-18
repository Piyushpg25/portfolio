"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const systemRef = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const p1Ref = useRef<HTMLDivElement | null>(null);
  const p2Ref = useRef<HTMLDivElement | null>(null);
  const p3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const system = systemRef.current;
    const core = coreRef.current;
    const ring = ringRef.current;
    const p1 = p1Ref.current;
    const p2 = p2Ref.current;
    const p3 = p3Ref.current;

    if (!system || !core || !ring || !p1 || !p2 || !p3) {
      return;
    }

    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let x = mouseX;
    let y = mouseY;

    let angle = 0;
    let frame = 0;

    let lastX = mouseX;
    let lastY = mouseY;
    let velocity = 0;

    const move = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;

      velocity = Math.min(Math.sqrt(dx * dx + dy * dy), 30);

      lastX = mouseX;
      lastY = mouseY;

      system.style.opacity = "1";
    };

    const leave = () => {
      system.style.opacity = "0";
    };

    const animate = () => {
      // Magnetic smoothing
      x += (mouseX - x) * 0.18;
      y += (mouseY - y) * 0.18;

      // Velocity decay
      velocity *= 0.9;

      // Orbital movement
      angle += 0.015 + velocity * 0.0007;

      system.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      // Core reacts to movement
      const coreScale = 1 + velocity * 0.018;

      core.style.transform = `
        translate3d(-50%, -50%, 0)
        scale(${coreScale})
      `;

      // Outer ring
      const stretch = 1 + velocity * 0.008;

      ring.style.transform = `
        translate3d(-50%, -50%, 0)
        rotate(${angle * 25}deg)
        scaleX(${stretch})
      `;

      // Violet particle
      const r1 = 23;

      p1.style.transform = `
        translate3d(
          ${Math.cos(angle) * r1}px,
          ${Math.sin(angle) * r1}px,
          0
        )
      `;

      // Cyan particle
      const r2 = 29;

      p2.style.transform = `
        translate3d(
          ${Math.cos(angle * 0.65 + 2.1) * r2}px,
          ${Math.sin(angle * 0.65 + 2.1) * r2}px,
          0
        )
      `;

      // Pink accent particle
      const r3 = 16;

      p3.style.transform = `
        translate3d(
          ${Math.cos(-angle * 1.35 + 4) * r3}px,
          ${Math.sin(-angle * 1.35 + 4) * r3}px,
          0
        )
      `;

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move, {
      passive: true,
    });

    document.documentElement.addEventListener(
      "mouseleave",
      leave,
    );

    animate();

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener("pointermove", move);

      document.documentElement.removeEventListener(
        "mouseleave",
        leave,
      );
    };
  }, []);

  return (
    <div
      ref={systemRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] size-0 opacity-0 will-change-transform"
    >
      {/* Main orbital ring */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full border will-change-transform"
        style={{
          borderColor: "rgba(139, 92, 246, 0.22)",
          borderTopColor: "rgba(34, 211, 238, 0.85)",
          borderRightColor: "rgba(99, 102, 241, 0.65)",
          borderBottomColor: "rgba(232, 121, 249, 0.35)",
        }}
      />

      {/* Inner orbit */}
      <div
        className="absolute left-0 top-0 size-7 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full border"
        style={{
          borderColor: "rgba(34, 211, 238, 0.12)",
          borderTopColor: "rgba(139, 92, 246, 0.5)",
        }}
      />

      {/* White / violet core */}
      <div
        ref={coreRef}
        className="absolute left-0 top-0 size-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
        style={{
          background: "#F5F3FF",
          boxShadow: `
            0 0 5px rgba(245, 243, 255, 1),
            0 0 12px rgba(139, 92, 246, 1),
            0 0 24px rgba(99, 102, 241, 0.85),
            0 0 42px rgba(34, 211, 238, 0.35)
          `,
        }}
      />

      {/* Violet orbit */}
      <span
        ref={p1Ref}
        className="absolute left-0 top-0 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
        style={{
          background: "#A78BFA",
          boxShadow: `
            0 0 7px rgba(167, 139, 250, 1),
            0 0 16px rgba(139, 92, 246, 0.8)
          `,
        }}
      />

      {/* Cyan orbit */}
      <span
        ref={p2Ref}
        className="absolute left-0 top-0 size-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
        style={{
          background: "#67E8F9",
          boxShadow: `
            0 0 7px rgba(103, 232, 249, 1),
            0 0 16px rgba(34, 211, 238, 0.8)
          `,
        }}
      />

      {/* Tiny pink accent */}
      <span
        ref={p3Ref}
        className="absolute left-0 top-0 size-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
        style={{
          background: "#F0ABFC",
          boxShadow: `
            0 0 6px rgba(240, 171, 252, 0.9),
            0 0 12px rgba(232, 121, 249, 0.6)
          `,
        }}
      />
    </div>
  );
}