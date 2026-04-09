"use client";
import { useRef } from "react";
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
import "./stack.scss";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--playfair-font",
  subsets: ["latin"],
});

const Stack = () => {
  const containerRef = useRef<HTMLElement>(null);

  // useGSAP(() => {
  //   const cards = containerRef.current?.querySelectorAll('.stack-card');

  //   if (!cards) return;

  //   cards.forEach((card) => {
  //     const tags = card.querySelectorAll('.tag');

  //     const handleMouseEnter = () => {
  //       gsap.fromTo(tags,
  //         { y: 6, opacity: 0.5 },
  //         { y: 0, opacity: 1, stagger: 0.04, duration: 0.3, ease: 'power2.out' }
  //       );
  //     };

  //     card.addEventListener('mouseenter', handleMouseEnter);

  //     return () => {
  //       card.removeEventListener('mouseenter', handleMouseEnter);
  //     };
  //   });
  // }, { scope: containerRef });

  return (
    <section id="stack" ref={containerRef}>
      <div className="stack-inner">
        <div className="section-eyebrow reveal">Stack</div>
        <h2 className={`${playfair.className} section-heading reveal`}>
          Built with the
          <br />
          right tools.
        </h2>
        <p className="section-sub reveal">
          Technologies I reach for — chosen for a reason, not just resume
          padding.
        </p>

        <div className="stack-grid">
          <div className="stack-card reveal">
            <span className="stack-card-icon">⚡</span>
            <div className="stack-card-name">Core</div>
            <div className="tag-list">
              <span className="tag">TypeScript</span>
              <span className="tag">JavaScript ES6+</span>
              <span className="tag">HTML5</span>
              <span className="tag">CSS3</span>
            </div>
          </div>
          <div className="stack-card reveal">
            <span className="stack-card-icon">🧩</span>
            <div className="stack-card-name">Frameworks</div>
            <div className="tag-list">
              <span className="tag">Next.js</span>
              <span className="tag">Svelte</span>
              <span className="tag">React</span>
            </div>
          </div>
          <div className="stack-card reveal">
            <span className="stack-card-icon">🎨</span>
            <div className="stack-card-name">Styling & Motion</div>
            <div className="tag-list">
              <span className="tag">SCSS/SASS</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">PostCSS</span>
              <span className="tag">GSAP</span>
            </div>
          </div>
          <div className="stack-card reveal">
            <span className="stack-card-icon">🏗</span>
            <div className="stack-card-name">Architecture</div>
            <div className="tag-list">
              <span className="tag">Feature-Sliced Design</span>
              <span className="tag">REST</span>
              <span className="tag">WebSockets</span>
              <span className="tag">gRPC</span>
            </div>
          </div>
          <div className="stack-card reveal">
            <span className="stack-card-icon">🗄</span>
            <div className="stack-card-name">Backend & DB</div>
            <div className="tag-list">
              <span className="tag">Node.js</span>
              <span className="tag">Bun</span>
              <span className="tag">MongoDB</span>
              <span className="tag">SQL</span>
              <span className="tag">Go</span>
            </div>
          </div>
          <div className="stack-card reveal">
            <span className="stack-card-icon">🐳</span>
            <div className="stack-card-name">DevOps</div>
            <div className="tag-list">
              <span className="tag">Docker</span>
              <span className="tag">docker-compose</span>
              <span className="tag">Linux</span>
              <span className="tag">systemd</span>
              <span className="tag">Bash</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
