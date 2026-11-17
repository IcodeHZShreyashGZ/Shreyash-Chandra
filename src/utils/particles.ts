/**
 * Interactive Sand Particle Physics Emitter
 * Strict compliance with DESIGN_DIRECTIVE.md Enhancement 3
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  decay: number;
  gravity: number;
  isEmoji?: boolean;
  char?: string;
}

class ParticleSandbox {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private isRunning: boolean = false;
  private boundLoop: () => void;

  constructor() {
    this.boundLoop = this.loop.bind(this);
  }

  public init(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
    if (!this.isRunning) {
      this.isRunning = true;
      this.loop();
    }
  }

  public resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  public burst(
    x: number,
    y: number,
    count: number = 26,
    customColors?: string[],
    isEmoji: boolean = false,
    emojis: string[] = ['🥥', '🌴', '🍍', '⭐', '⚡']
  ) {
    const defaultColors = ['#FFC247', '#FF4B18', '#087FE5', '#008B69', '#FFF9ED'];
    const colors = customColors || defaultColors;

    for (let i = 0; i < count; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const char = emojis[Math.floor(Math.random() * emojis.length)];

      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * (isEmoji ? 10 : 8),
        vy: (Math.random() - 1.2) * (isEmoji ? 11 : 9),
        size: isEmoji ? 18 : Math.floor(Math.random() * 5 + 3), // 16-bit block pixel square (3px to 8px)
        color,
        life: 1.0,
        decay: Math.random() * 0.02 + 0.015,
        gravity: 0.35,
        isEmoji,
        char,
      });
    }
  }

  private loop() {
    if (!this.ctx || !this.canvas) {
      requestAnimationFrame(this.boundLoop);
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.life -= p.decay;

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.life);

      if (p.isEmoji && p.char) {
        this.ctx.font = `${p.size}px monospace`;
        this.ctx.fillText(p.char, Math.floor(p.x), Math.floor(p.y));
      } else {
        this.ctx.fillStyle = p.color;
        // Pixelated hard-edge blocks
        this.ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
      }
      this.ctx.restore();

      if (p.life <= 0 || p.y > this.canvas.height + 40) {
        this.particles.splice(i, 1);
      }
    }

    requestAnimationFrame(this.boundLoop);
  }
}

export const particleSandbox = new ParticleSandbox();
