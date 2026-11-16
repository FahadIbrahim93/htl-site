import { useEffect, useRef } from "react";

function stateFor(progress: number) {
  if (progress < 0.22) return "Scattered";
  if (progress < 0.62) return "Structured";
  return "Alive";
}

type Particle = {
  sx: number;
  sy: number;
  tx: number;
  ty: number;
  gold: boolean;
  phase: number;
};

export function Atmosphere() {
  const svgRef = useRef<SVGSVGElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let alive = true;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let morph = reduced ? 0.5 : 0;
    const dots: SVGCircleElement[] = [];
    let links: SVGPathElement | null = null;

    const layout = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      const count = width < 720 ? 32 : 52;
      const cx = width * (width < 720 ? 0.72 : 0.74);
      const cy = height * 0.42;
      particles = Array.from({ length: count }, (_, index) => {
        const angle = (index / count) * Math.PI * 2 + (index % 3) * 0.2;
        const ring = 1 + (index % 3);
        const radius = (width < 720 ? 58 : 100) * ring * 0.55;
        return {
          sx: (((index * 47) % 100) / 100) * width,
          sy: (((index * 29) % 100) / 100) * height,
          tx: cx + Math.cos(angle) * radius,
          ty: cy + Math.sin(angle) * radius * 0.68,
          gold: index % 7 === 0,
          phase: (index % 11) * 0.57,
        };
      });
      while (dots.length) dots.pop()?.remove();
      links?.remove();
      links = document.createElementNS("http://www.w3.org/2000/svg", "path");
      links.setAttribute("fill", "none");
      links.setAttribute("stroke", "#B8892F");
      svg.appendChild(links);
      for (let i = 0; i < count; i += 1) {
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("fill", particles[i].gold ? "#FFBD61" : "#EEF0F2");
        svg.appendChild(dot);
        dots.push(dot);
      }
    };

    const progress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return 0;
      return Math.min(1, Math.max(0, window.scrollY / max));
    };

    const draw = (time: number) => {
      const target = reduced ? 0.48 : progress();
      morph += (target - morph) * (reduced ? 1 : 0.055);
      const label = stateFor(morph);
      if (labelRef.current && labelRef.current.textContent !== label) {
        labelRef.current.textContent = label;
      }
      const energy = Math.max(0, (morph - 0.55) / 0.45);
      const points = particles.map((particle) => {
        const drift = reduced ? 0 : Math.sin(time * 0.00035 + particle.phase) * (4 + energy * 12);
        return {
          x: particle.sx + (particle.tx - particle.sx) * morph + Math.cos(particle.phase) * drift * morph,
          y: particle.sy + (particle.ty - particle.sy) * morph + Math.sin(particle.phase) * drift * morph,
          gold: particle.gold,
        };
      });
      const reach = 110 + morph * 50;
      let commands = "";
      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          if (dx * dx + dy * dy < reach * reach) {
            commands += `M${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)}L${points[j].x.toFixed(1)} ${points[j].y.toFixed(1)}`;
          }
        }
      }
      if (!links) return;
      links.setAttribute("d", commands);
      links.setAttribute("stroke-opacity", (0.1 + morph * 0.22).toFixed(3));
      points.forEach((point, index) => {
        const dot = dots[index];
        if (!dot) return;
        dot.setAttribute("cx", String(point.x));
        dot.setAttribute("cy", String(point.y));
        dot.setAttribute("r", point.gold ? "2.2" : "1.2");
        dot.setAttribute("fill-opacity", point.gold ? String(0.55 + morph * 0.4) : String(0.35 + morph * 0.4));
      });
      if (alive && !reduced) frame = requestAnimationFrame(draw);
    };

    layout();
    draw(0);
    const onResize = () => {
      layout();
      if (reduced) draw(0);
    };
    window.addEventListener("resize", onResize);
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <svg ref={svgRef} className="h-full w-full" />
        <div className="field-scrim absolute inset-0" />
        <div className="grain absolute inset-0" />
      </div>
      <p
        className="pointer-events-none fixed bottom-5 left-4 z-20 hidden border border-line bg-ink px-3 py-2 font-mono text-xs tracking-widest text-quiet uppercase sm:block"
        aria-hidden="true"
      >
        Signal · <span ref={labelRef} className="text-amber">Scattered</span>
      </p>
    </>
  );
}
