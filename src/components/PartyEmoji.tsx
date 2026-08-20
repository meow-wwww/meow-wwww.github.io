import { useRef, useState } from "react";

const RIBBON_COLORS = [
  "#FF6B35",
  "#FFD166",
  "#06D6A0",
  "#118AB2",
  "#EF476F",
  "#7B2CBF",
  "#FF85A1",
  "#90BE6D",
  "#4CC9F0",
  "#F72585",
];

type Ribbon = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  spin: number;
  length: number;
  width: number;
  color: string;
  phase: number;
  phaseSpeed: number;
  amplitude: number;
  life: number;
  maxLife: number;
};

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let ribbons: Ribbon[] = [];
let raf = 0;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function resizeCanvas() {
  if (!canvas || !ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function ensureCanvas() {
  if (canvas && ctx) return;
  canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  Object.assign(canvas.style, {
    position: "fixed",
    inset: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: "9999",
  });
  document.body.appendChild(canvas);
  ctx = canvas.getContext("2d");
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
}

function teardownCanvas() {
  cancelAnimationFrame(raf);
  raf = 0;
  window.removeEventListener("resize", resizeCanvas);
  canvas?.remove();
  canvas = null;
  ctx = null;
  ribbons = [];
}

function spawnRibbons(originX: number, originY: number) {
  const count = 16;
  for (let i = 0; i < count; i++) {
    // Party-popper cone: mostly up and out, with a few wild ones
    const spread = (Math.random() - 0.5) * Math.PI * 1.15;
    const heading = -Math.PI / 2 + spread;
    const speed = 7 + Math.random() * 13;
    ribbons.push({
      x: originX,
      y: originY,
      vx: Math.cos(heading) * speed,
      vy: Math.sin(heading) * speed,
      angle: heading,
      spin: (Math.random() - 0.5) * 0.18,
      length: 10 + Math.random() * 42,
      width: 3.5 + Math.random() * 3.5,
      color: RIBBON_COLORS[i % RIBBON_COLORS.length],
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.12 + Math.random() * 0.18,
      amplitude: 4 + Math.random() * 7,
      life: 0,
      maxLife: 70 + Math.random() * 40,
    });
  }
}

function drawRibbon(context: CanvasRenderingContext2D, ribbon: Ribbon) {
  const fade = 1 - ribbon.life / ribbon.maxLife;
  context.save();
  context.translate(ribbon.x, ribbon.y);
  context.rotate(ribbon.angle);
  context.globalAlpha = Math.max(0, fade);
  context.strokeStyle = ribbon.color;
  context.lineWidth = ribbon.width;
  context.lineCap = "round";
  context.lineJoin = "round";

  context.beginPath();
  const segments = 10;
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const along = t * ribbon.length;
    const wave = Math.sin(t * Math.PI * 2.4 + ribbon.phase) * ribbon.amplitude * (0.35 + t);
    if (i === 0) context.moveTo(wave, along);
    else context.lineTo(wave, along);
  }
  context.stroke();
  context.restore();
}

function tick() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  ribbons = ribbons.filter((ribbon) => {
    ribbon.vy += 0.22;
    ribbon.vx *= 0.985;
    ribbon.vy *= 0.992;
    ribbon.x += ribbon.vx;
    ribbon.y += ribbon.vy;
    ribbon.angle += ribbon.spin + ribbon.vx * 0.004;
    ribbon.phase += ribbon.phaseSpeed;
    ribbon.life += 1;
    drawRibbon(ctx!, ribbon);
    return ribbon.life < ribbon.maxLife && ribbon.y < window.innerHeight + 80;
  });

  if (ribbons.length === 0) {
    teardownCanvas();
    return;
  }
  raf = requestAnimationFrame(tick);
}

function burstRibbons(originX: number, originY: number) {
  if (prefersReducedMotion()) return;
  ensureCanvas();
  spawnRibbons(originX, originY);
  if (!raf) raf = requestAnimationFrame(tick);
}

const PartyEmoji = () => {
  const emojiRef = useRef<HTMLButtonElement>(null);
  const [popping, setPopping] = useState(false);

  const celebrate = () => {
    const el = emojiRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    burstRibbons(rect.left + rect.width / 2, rect.top + rect.height / 2);
    setPopping(false);
    requestAnimationFrame(() => setPopping(true));
  };

  return (
    <span className="inline-block animate-float">
      <button
        ref={emojiRef}
        type="button"
        onClick={celebrate}
        onAnimationEnd={() => setPopping(false)}
        aria-label="Celebrate with colorful ribbons"
        title="Click for a celebration!"
        className={`inline-block cursor-pointer select-none rounded-sm transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
          popping ? "animate-party-pop" : ""
        }`}
      >
        🥳
      </button>
    </span>
  );
};

export default PartyEmoji;
