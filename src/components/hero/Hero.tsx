"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Particle } from "../../lib/types/Particle";
import "./hero.scss";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--playfair-font",
  subsets: ["latin"],
});
const playfair_Italic = Playfair_Display({
  variable: "--playfair-font-italic",
  subsets: ["latin"],
  style: "italic",
});

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const W = useRef(0);
  const H = useRef(0);
  const particles = useRef<Particle[]>([]);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      W.current = canvas.width = canvas.offsetWidth;
      H.current = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      const p = new Particle(W.current, H.current);
      p.life = Math.random() * p.maxLife;
      p.y = Math.random() * H.current;
      particles.current.push(p);
    }

    let animId: number;
    function animP() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W.current, H.current);
      particles.current.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animP);
    }
    animP();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.15 });

    tl.to(".hero-title-line", {
      y: "0%",
      duration: 1.1,
      stagger: 0.1,
      ease: "expo.out",
    })
      .to(
        ".hero-subtitle-text",
        { y: "0%", duration: 0.9, ease: "expo.out", opacity: 1 },
        "-=.7",
      )
      .to(
        ".hero-eyebrow",
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=.5",
      )
      .to(
        ".hero-desc",
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=.3",
      )
      .to(
        ".hero-actions",
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=.2",
      )
      .to(".hero-status", { opacity: 1, duration: 0.5 }, "-=.1");
  }, []);

  return (
    <section id="hero">
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <canvas ref={canvasRef} id="particles-canvas"></canvas>

      <p className="hero-eyebrow">Fullstack Developer · Based in Moscow</p>

      <h1 className={`${playfair.className} hero-title`}>
        <span className="hero-title-line">Georgii</span>
        <span className="hero-title-line">Stavisskii</span>
      </h1>
      <div className="hero-subtitle-wrap">
        <span className={`${playfair_Italic.className} hero-subtitle-text`}>
          builds things that matter.
        </span>
      </div>

      <p className="hero-desc">
        I build <strong>fast, reliable interfaces</strong> — from architecture
        to production.
      </p>

      <div className="hero-actions">
        <a href="#experience" className="btn-blue">
          View Experience
        </a>
        <a href="#contact" className="btn-outline">
          Get in touch
        </a>
      </div>

      {/* <div className="hero-status">
        <div className="status-dot"></div>
        <span>Available for new opportunities</span>
      </div> */}
    </section>
  );
};

export default Hero;
