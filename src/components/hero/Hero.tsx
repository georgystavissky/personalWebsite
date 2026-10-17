"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Particle } from "../../lib/types/Particle";
import { profile } from "@/data/profile";
import "./hero.scss";

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
        ".hero-eyebrow",
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=.7",
      )
      .to(
        ".hero-desc",
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=.4",
      )
      .to(
        ".hero-actions",
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=.3",
      );
  }, []);

  return (
    <section id="hero">
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <canvas ref={canvasRef} id="particles-canvas"></canvas>

      <p className="hero-eyebrow">{profile.role}</p>

      <h1 className="hero-title">
        <span className="hero-title-line">{profile.name.first}</span>
        <span className="hero-title-line">{profile.name.last}</span>
      </h1>

      <p className="hero-desc">{profile.tagline}</p>

      <div className="hero-actions">
        <a href="#experience" className="btn-blue">
          View Experience
        </a>
        <a href="#contact" className="btn-outline">
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
