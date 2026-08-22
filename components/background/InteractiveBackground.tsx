"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  depth: number;
  drift: number;
  signal: number;
  pulse: number;
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

    const rootStyle = document.documentElement.style;
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
      const baseDensity = isMobile ? 17000 : 7600;
      const maxParticles = reducedMotion ? 46 : isMobile ? 92 : 238;
      const minParticles = reducedMotion ? 22 : isMobile ? 44 : 122;
      const count = clamp(Math.floor(area / baseDensity), minParticles, maxParticles);
      const spawnPadding = Math.min(Math.max(width, height) * 0.18, 260);

      particles = Array.from({ length: count }, () => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2;
        const depth = 0.35 + Math.random() * 0.9;
        const speed = reducedMotion
          ? 0.008 + Math.random() * 0.014
          : 0.022 + Math.random() * 0.065;

        return {
          x: Math.random() * (width + spawnPadding * 2) - spawnPadding,
          y: Math.random() * (height + spawnPadding * 2) - spawnPadding,
          vx: Math.cos(angle) * speed * depth,
          vy: Math.sin(angle) * speed * depth,
          radius: (reducedMotion ? 0.52 + Math.random() * 0.72 : 0.48 + Math.random() * 1.46) * depth,
          color,
          alpha: reducedMotion ? 0.06 + Math.random() * 0.06 : 0.07 + Math.random() * 0.18,
          depth,
          drift: 0.35 + Math.random() * 0.86,
          signal: Math.random(),
          pulse: Math.random() * Math.PI * 2,
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
      const range = isMobile ? 116 : 158;
      const opacity = (1 - distance / range) * (reducedMotion ? 0.02 : 0.068);
      const gradient = context.createLinearGradient(a.x, a.y, b.x, b.y);
      gradient.addColorStop(0, `rgba(${a.color}, ${opacity * Math.min(a.depth, b.depth)})`);
      gradient.addColorStop(1, `rgba(${b.color}, ${opacity * Math.min(a.depth, b.depth)})`);
      context.strokeStyle = gradient;
      context.lineWidth = 0.34 + Math.min(a.depth, b.depth) * 0.24;
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.lineTo(b.x, b.y);
      context.stroke();
    }

    function drawAmbientVeils(time: number) {
      if (reducedMotion) return;

      const phase = time * 0.00012;
      const cyanX = width * (0.68 + Math.sin(phase) * 0.08);
      const cyanY = height * (0.18 + Math.cos(phase * 1.4) * 0.05);
      const violetX = width * (0.18 + Math.cos(phase * 0.86) * 0.07);
      const violetY = height * (0.72 + Math.sin(phase * 1.18) * 0.06);

      const cyanVeil = context.createRadialGradient(cyanX, cyanY, 0, cyanX, cyanY, Math.max(width, height) * 0.58);
      cyanVeil.addColorStop(0, "rgba(34, 211, 238, 0.035)");
      cyanVeil.addColorStop(0.42, "rgba(96, 165, 250, 0.014)");
      cyanVeil.addColorStop(1, "rgba(34, 211, 238, 0)");
      context.fillStyle = cyanVeil;
      context.fillRect(0, 0, width, height);

      const violetVeil = context.createRadialGradient(violetX, violetY, 0, violetX, violetY, Math.max(width, height) * 0.52);
      violetVeil.addColorStop(0, "rgba(168, 85, 247, 0.034)");
      violetVeil.addColorStop(0.48, "rgba(139, 92, 246, 0.012)");
      violetVeil.addColorStop(1, "rgba(168, 85, 247, 0)");
      context.fillStyle = violetVeil;
      context.fillRect(0, 0, width, height);
    }

    function drawPointerGlow() {
      if (isMobile || !pointer.active) return;

      const glow = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        reducedMotion ? 120 : 230,
      );
      glow.addColorStop(0, `rgba(34, 211, 238, ${reducedMotion ? 0.035 : 0.13})`);
      glow.addColorStop(0.28, `rgba(168, 85, 247, ${reducedMotion ? 0.022 : 0.075})`);
      glow.addColorStop(0.58, `rgba(96, 165, 250, ${reducedMotion ? 0.01 : 0.038})`);
      glow.addColorStop(1, "rgba(34, 211, 238, 0)");

      context.fillStyle = glow;
      context.beginPath();
      context.arc(pointer.x, pointer.y, 190, 0, Math.PI * 2);
      context.fill();

      const core = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        72,
      );
      core.addColorStop(0, "rgba(255, 255, 255, 0.11)");
      core.addColorStop(0.22, "rgba(34, 211, 238, 0.09)");
      core.addColorStop(1, "rgba(168, 85, 247, 0)");

      context.fillStyle = core;
      context.beginPath();
      context.arc(pointer.x, pointer.y, 74, 0, Math.PI * 2);
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

      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;
      drawAmbientVeils(time);
      drawPointerGlow();

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        if (!reducedMotion) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (pointer.active && distance < 210 && distance > 0.001) {
            const force = (1 - distance / 210) * (isMobile ? 0.004 : 0.016) * particle.depth;
            const orbit = force * 0.42;
            particle.vx += (dx / distance) * force + (-dy / distance) * orbit;
            particle.vy += (dy / distance) * force + (dx / distance) * orbit;
          }
        }

        const ambientX = Math.sin(time * 0.00018 + particle.signal * 6.28) * 0.008 * particle.depth;
        const ambientY = Math.cos(time * 0.00015 + particle.signal * 6.28) * 0.006 * particle.depth;

        particle.x += (particle.vx + ambientX) * delta * particle.drift;
        particle.y += (particle.vy + ambientY) * delta * particle.drift;
        particle.vx *= 0.988;
        particle.vy *= 0.988;

        const wrapPadding = Math.min(Math.max(width, height) * 0.14, 220);
        if (particle.x < -wrapPadding) particle.x = width + wrapPadding;
        if (particle.x > width + wrapPadding) particle.x = -wrapPadding;
        if (particle.y < -wrapPadding) particle.y = height + wrapPadding;
        if (particle.y > height + wrapPadding) particle.y = -wrapPadding;

        const twinkle = reducedMotion
          ? 0
          : Math.sin(time * 0.0011 + particle.pulse) * 0.032;
        const alpha = Math.max(0.025, particle.alpha + twinkle);

        if (!reducedMotion && particle.signal > 0.88) {
          const haloRadius = particle.radius * (6.5 + Math.sin(time * 0.0012 + particle.pulse) * 1.4);
          const halo = context.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            haloRadius,
          );
          halo.addColorStop(0, `rgba(${particle.color}, ${alpha * 0.18})`);
          halo.addColorStop(1, `rgba(${particle.color}, 0)`);
          context.fillStyle = halo;
          context.beginPath();
          context.arc(particle.x, particle.y, haloRadius, 0, Math.PI * 2);
          context.fill();
        }

        context.fillStyle = `rgba(${particle.color}, ${alpha})`;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      if (!reducedMotion) {
        const range = isMobile ? 116 : 158;
        for (let i = 0; i < particles.length; i += 1) {
          for (let j = i + 1; j < particles.length; j += 1) {
            const a = particles[i];
            const b = particles[j];
            const distance = Math.hypot(a.x - b.x, a.y - b.y);
            if (distance < range && (a.signal + b.signal + time * 0.000045) % 1 > 0.78) {
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
      const cursorX = `${event.clientX.toFixed(1)}px`;
      const cursorY = `${event.clientY.toFixed(1)}px`;
      const cursorPercentX = `${(event.clientX / window.innerWidth * 100).toFixed(2)}%`;
      const cursorPercentY = `${(event.clientY / window.innerHeight * 100).toFixed(2)}%`;

      rootStyle.setProperty("--cursor-x", cursorX);
      rootStyle.setProperty("--cursor-y", cursorY);
      rootStyle.setProperty("--cursor-gradient-x", cursorPercentX);
      rootStyle.setProperty("--cursor-gradient-y", cursorPercentY);
      rootStyle.setProperty("--cursor-page-x", `${(-x * 14).toFixed(2)}px`);
      rootStyle.setProperty("--cursor-page-y", `${(-y * 12).toFixed(2)}px`);
      rootStyle.setProperty("--cursor-panel-a-x", `${(x * 14).toFixed(2)}px`);
      rootStyle.setProperty("--cursor-panel-a-y", `${(y * 11).toFixed(2)}px`);
      rootStyle.setProperty("--cursor-panel-b-x", `${(-x * 11).toFixed(2)}px`);
      rootStyle.setProperty("--cursor-panel-b-y", `${(y * 8).toFixed(2)}px`);
      rootStyle.setProperty("--cursor-panel-c-x", `${(x * 8).toFixed(2)}px`);
      rootStyle.setProperty("--cursor-panel-c-y", `${(-y * 10).toFixed(2)}px`);
    }

    function handlePointerLeave() {
      pointer.active = false;
      rootStyle.setProperty("--cursor-page-x", "0px");
      rootStyle.setProperty("--cursor-page-y", "0px");
      rootStyle.setProperty("--cursor-panel-a-x", "0px");
      rootStyle.setProperty("--cursor-panel-a-y", "0px");
      rootStyle.setProperty("--cursor-panel-b-x", "0px");
      rootStyle.setProperty("--cursor-panel-b-y", "0px");
      rootStyle.setProperty("--cursor-panel-c-x", "0px");
      rootStyle.setProperty("--cursor-panel-c-y", "0px");
    }

    function handleScroll() {
      const drift = Math.min(window.scrollY * 0.024, 38);
      rootStyle.setProperty("--scroll-drift-a", `${-drift.toFixed(2)}px`);
      rootStyle.setProperty(
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
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".pathway-card, .tool-card, .embed-card, .podcast-card, .channel-card, .media-link-card, .coming-soon-panel, .content-row, .feature-panel, .about-copy, .contact-section, .landing-highlight-card, .principle-card, .asset-card, .ai-tool-card, .ai-tool-detail-card",
      ),
    );

    if (cards.length === 0) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    function handleMove(event: PointerEvent) {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      target.style.setProperty("--card-glow-x", `${x.toFixed(2)}%`);
      target.style.setProperty("--card-glow-y", `${y.toFixed(2)}%`);
      target.style.setProperty("--card-tilt-x", `${((y - 50) * -0.025).toFixed(2)}deg`);
      target.style.setProperty("--card-tilt-y", `${((x - 50) * 0.025).toFixed(2)}deg`);
    }

    function handleLeave(event: PointerEvent) {
      const target = event.currentTarget as HTMLElement;
      target.style.setProperty("--card-glow-x", "50%");
      target.style.setProperty("--card-glow-y", "0%");
      target.style.setProperty("--card-tilt-x", "0deg");
      target.style.setProperty("--card-tilt-y", "0deg");
    }

    for (const card of cards) {
      card.addEventListener("pointermove", handleMove, { passive: true });
      card.addEventListener("pointerleave", handleLeave);
    }

    return () => {
      for (const card of cards) {
        card.removeEventListener("pointermove", handleMove);
        card.removeEventListener("pointerleave", handleLeave);
      }
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

    const revealItem = (item: HTMLElement) => {
      item.classList.add("is-visible");
    };

    const revealVisibleItems = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      motionItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < viewportHeight * 1.08 && rect.bottom > -viewportHeight * 0.08) {
          revealItem(item);
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealItem(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "12% 0px 12% 0px", threshold: 0.01 },
    );

    motionItems.forEach((item, index) => {
      item.style.setProperty("--motion-delay", `${Math.min(index % 4, 3) * 55}ms`);
      observer.observe(item);
    });

    revealVisibleItems();
    window.addEventListener("scroll", revealVisibleItems, { passive: true });
    window.addEventListener("resize", revealVisibleItems);

    const fallback = window.setTimeout(() => {
      motionItems.forEach(revealItem);
    }, 1400);

    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("scroll", revealVisibleItems);
      window.removeEventListener("resize", revealVisibleItems);
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
