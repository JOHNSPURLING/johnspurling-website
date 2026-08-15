"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  drift: number;
  signal: number;
};

const colors = [
  "139, 92, 246",
  "168, 85, 247",
  "96, 165, 250",
  "34, 211, 238",
  "45, 212, 191",
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = {
      active: false,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    };

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let frame = 0;
    let lastTime = performance.now();
    let isVisible = document.visibilityState === "visible";
    let reducedMotion = media.matches;
    let isMobile = window.matchMedia("(pointer: coarse)").matches;

    function createParticles() {
      const area = width * height;
      const baseDensity = isMobile ? 36000 : 18000;
      const maxParticles = reducedMotion ? 28 : isMobile ? 42 : 92;
      const minParticles = reducedMotion ? 16 : isMobile ? 22 : 46;
      const count = clamp(Math.floor(area / baseDensity), minParticles, maxParticles);

      particles = Array.from({ length: count }, () => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = reducedMotion
          ? 0.018 + Math.random() * 0.018
          : 0.035 + Math.random() * 0.07;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: reducedMotion ? 0.7 + Math.random() * 0.9 : 0.8 + Math.random() * 1.5,
          color,
          drift: 0.45 + Math.random() * 0.75,
          signal: Math.random(),
        };
      });
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      isMobile = window.matchMedia("(pointer: coarse)").matches;
      createParticles();
    }

    function drawConnection(a: Particle, b: Particle, distance: number) {
      const opacity = (1 - distance / 132) * (reducedMotion ? 0.05 : 0.1);
      context.strokeStyle = `rgba(125, 211, 252, ${opacity})`;
      context.lineWidth = 0.65;
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.lineTo(b.x, b.y);
      context.stroke();
    }

    function drawPointerGlow() {
      if (isMobile || reducedMotion || !pointer.active) return;

      const glow = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        190,
      );
      glow.addColorStop(0, "rgba(34, 211, 238, 0.13)");
      glow.addColorStop(0.34, "rgba(139, 92, 246, 0.07)");
      glow.addColorStop(1, "rgba(34, 211, 238, 0)");

      context.fillStyle = glow;
      context.beginPath();
      context.arc(pointer.x, pointer.y, 190, 0, Math.PI * 2);
      context.fill();
    }

    function animate(time: number) {
      if (!isVisible) {
        frame = 0;
        return;
      }

      frame = window.requestAnimationFrame(animate);

      const delta = Math.min(34, time - lastTime);
      lastTime = time;

      context.clearRect(0, 0, width, height);
      drawPointerGlow();

      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        if (!reducedMotion) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (pointer.active && distance < 170 && distance > 0.001) {
            const force = (1 - distance / 170) * (isMobile ? 0.006 : 0.018);
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
        }

        particle.x += particle.vx * delta * particle.drift;
        particle.y += particle.vy * delta * particle.drift;
        particle.vx *= 0.992;
        particle.vy *= 0.992;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        context.fillStyle = `rgba(${particle.color}, ${reducedMotion ? 0.18 : 0.32})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      if (!reducedMotion) {
        for (let i = 0; i < particles.length; i += 1) {
          for (let j = i + 1; j < particles.length; j += 1) {
            const a = particles[i];
            const b = particles[j];
            const distance = Math.hypot(a.x - b.x, a.y - b.y);
            if (distance < 132 && (a.signal + b.signal) % 1 > 0.72) {
              drawConnection(a, b, distance);
            }
          }
        }
      }
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      pointer.active = true;
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;

      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      document.documentElement.style.setProperty("--cursor-page-x", `${(-x * 10).toFixed(2)}px`);
      document.documentElement.style.setProperty("--cursor-page-y", `${(-y * 10).toFixed(2)}px`);
      document.documentElement.style.setProperty("--cursor-panel-a-x", `${(x * 10).toFixed(2)}px`);
      document.documentElement.style.setProperty("--cursor-panel-a-y", `${(y * 8).toFixed(2)}px`);
      document.documentElement.style.setProperty("--cursor-panel-b-x", `${(-x * 8).toFixed(2)}px`);
      document.documentElement.style.setProperty("--cursor-panel-b-y", `${(y * 6).toFixed(2)}px`);
      document.documentElement.style.setProperty("--cursor-panel-c-x", `${(x * 6).toFixed(2)}px`);
      document.documentElement.style.setProperty("--cursor-panel-c-y", `${(-y * 8).toFixed(2)}px`);
    }

    function handlePointerLeave() {
      pointer.active = false;
      document.documentElement.style.setProperty("--cursor-page-x", "0px");
      document.documentElement.style.setProperty("--cursor-page-y", "0px");
      document.documentElement.style.setProperty("--cursor-panel-a-x", "0px");
      document.documentElement.style.setProperty("--cursor-panel-a-y", "0px");
      document.documentElement.style.setProperty("--cursor-panel-b-x", "0px");
      document.documentElement.style.setProperty("--cursor-panel-b-y", "0px");
      document.documentElement.style.setProperty("--cursor-panel-c-x", "0px");
      document.documentElement.style.setProperty("--cursor-panel-c-y", "0px");
    }

    function handleScroll() {
      const drift = Math.min(window.scrollY * 0.024, 38);
      document.documentElement.style.setProperty("--scroll-drift-a", `${-drift.toFixed(2)}px`);
      document.documentElement.style.setProperty(
        "--scroll-drift-b",
        `${-(drift * 0.58).toFixed(2)}px`,
      );
    }

    function handleVisibilityChange() {
      isVisible = document.visibilityState === "visible";
      lastTime = performance.now();

      if (!isVisible && frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }

      if (isVisible && !frame) {
        frame = window.requestAnimationFrame(animate);
      }
    }

    function handleMotionChange() {
      reducedMotion = media.matches;
      createParticles();
    }

    resize();
    handleScroll();
    frame = window.requestAnimationFrame(animate);

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    media.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      media.removeEventListener("change", handleMotionChange);
    };
  }, []);

  useEffect(() => {
    const motionItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-motion]"),
    );

    if (motionItems.length === 0) return;

    document.documentElement.classList.add("motion-ready");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      motionItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    motionItems.forEach((item, index) => {
      item.style.setProperty("--motion-delay", `${Math.min(index % 4, 3) * 55}ms`);
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <div className="ambient-background" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
