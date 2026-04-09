export class Particle {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
  life: number = 0;
  maxLife: number = 0;
  size: number = 0;

  constructor(
    private W: number,
    private H: number,
  ) {
    this.reset(W, H);
  }

  reset(W: number = this.W, H: number = this.H) {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.life = 0;
    this.maxLife = Math.random() * 200 + 100;
    this.size = Math.random() * 3 + 1;
  }

  update(W: number = this.W, H: number = this.H) {
    this.x += this.vx;
    this.y += this.vy;
    this.life++;
    if (this.life > this.maxLife) this.reset(W, H);
  }

  draw(ctx: CanvasRenderingContext2D) {
    const a = Math.sin((this.life / this.maxLife) * Math.PI) * 0.6;
    ctx.globalAlpha = a;
    ctx.fillStyle = "#0071e3";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
