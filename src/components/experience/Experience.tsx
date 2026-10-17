"use client";
import { useGSAP } from "@gsap/react";
import "./experience.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { profile } from "@/data/profile";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { experience } = profile;

  useGSAP(
    () => {
      const points = gsap.utils.toArray<HTMLElement>(".exp-point");

      points.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
            delay: (i % 5) * 0.09,
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section id="experience" ref={containerRef}>
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow reveal">{experience.eyebrow}</div>
          <h2 className="section-heading reveal">{experience.heading}</h2>
          <p className="section-sub reveal">{experience.sub}</p>
        </div>

        <div className="exp-timeline">
          {experience.items.map((item) => (
            <div className="exp-item" key={item.period}>
              <div className="exp-left reveal">
                <div className="exp-period">{item.period}</div>
                <div className="exp-co">{item.company}</div>
                <div className="exp-loc">{item.location}</div>
              </div>
              <div className="exp-right">
                <div className="exp-title reveal">{item.title}</div>
                <p className="exp-desc reveal">{item.description}</p>
                <div className="exp-list-items">
                  {item.points.map((point) => (
                    <div className="exp-point" key={point}>
                      <div className="exp-point-dot"></div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="exp-chips">
                  {item.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
