"use client";
import { useRef } from "react";
import "./stats.scss";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { Playfair_Display } from "next/font/google";
gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display({
  variable: "--playfair-font",
  subsets: ["latin"],
});

const Stats = () => {
  const sn1 = useRef<HTMLSpanElement>(null); // sn = stat number
  const sn2 = useRef<HTMLSpanElement>(null);
  const sn3 = useRef<HTMLSpanElement>(null);
  const sn4 = useRef<HTMLSpanElement>(null);

  const stats = [
    {
      el: sn1,
      from: 0,
      to: 2,
      suffix: "+",
      decimals: 0,
    },
    {
      el: sn2,
      from: 0,
      to: 6,
      suffix: "",
      decimals: 0,
    },
    {
      el: sn3,
      from: 0,
      to: 10,
      suffix: "+",
      decimals: 0,
    },
    {
      el: sn4,
      from: 0,
      to: 1,
      suffix: "",
      decimals: 0,
    },
  ];

  useGSAP(() => {
    stats.forEach((s) => {
      ScrollTrigger.create({
        trigger: "#stats",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            { val: s.from },
            { val: s.to },
            {
              duration: 1.4,
              ease: "power2.out",
              onUpdate: function () {
                if (!s.el.current) return;
                s.el.current.textContent =
                  Math.round(this.targets()[0].val) + s.suffix;
              },
            },
          );
        },
      });
    });
  }, []);

  return (
    <div id="stats" className={`${playfair.className}`}>
      <div className="stat-item reveal">
        <span className="stat-number" ref={sn1}>
          2+
        </span>
        <span className="stat-label">Years of commercial experience</span>
      </div>
      <div className="stat-item reveal">
        <span className="stat-number" ref={sn2}>
          6
        </span>
        <span className="stat-label">Major features shipped end-to-end</span>
      </div>
      <div className="stat-item reveal">
        <span className="stat-number" ref={sn3}>
          10+
        </span>
        <span className="stat-label">Technologies in active use</span>
      </div>
      <div className="stat-item reveal">
        <span className="stat-number" ref={sn4}>
          1
        </span>
        <span className="stat-label">Product built from scratch</span>
      </div>
    </div>
  );
};

export default Stats;
