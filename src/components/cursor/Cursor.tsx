"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./cursor.scss";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const isHovering = useRef(false);

  useGSAP(() => {
    const handleMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;

      gsap.to(cursorRef.current, {
        x: mx.current,
        y: my.current,
        duration: 0.06,
        ease: "none",
      });

      if (!isHovering.current) {
        const el = document.elementFromPoint(mx.current, my.current);
        const isDark = !!el?.closest("#contact");

        gsap.to(cursorRef.current, {
          backgroundColor: isDark ? "#ffffff" : "var(--text)",
          duration: 0.2,
        });
        gsap.to(cursorRingRef.current, {
          borderColor: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.25)",
          duration: 0.2,
        });
      }
    };

    const tickerFn = () => {
      rx.current += (mx.current - rx.current) * 0.1;
      ry.current += (my.current - ry.current) * 0.1;
      gsap.set(cursorRingRef.current, { x: rx.current, y: ry.current });
    };

    document.addEventListener("mousemove", handleMove);
    gsap.ticker.add(tickerFn);

    const els = document.querySelectorAll(
      "a, button, .about-card, .stack-card",
    );

    els.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        isHovering.current = true;
        document.body.classList.add("hovering");

        gsap.to(cursorRingRef.current, {
          width: 64,
          height: 64,
          borderColor: "rgba(0, 113, 227, 0.4)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursorRef.current, {
          width: 0,
          height: 0,
          duration: 0.25,
          ease: "power2.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        isHovering.current = false;
        document.body.classList.remove("hovering");

        const isDark = !!el.closest("#contact");

        gsap.to(cursorRingRef.current, {
          width: 40,
          height: 40,
          borderColor: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.25)",
          duration: 0.35,
          ease: "power2.out",
        });
        gsap.to(cursorRef.current, {
          width: 8,
          height: 8,
          backgroundColor: isDark ? "#ffffff" : "var(--text)",
          duration: 0.25,
          ease: "power2.out",
        });
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      gsap.ticker.remove(tickerFn);
    };
  });

  return (
    <>
      <div ref={cursorRef} id="cursor"></div>
      <div ref={cursorRingRef} id="cursor-ring"></div>
    </>
  );
};

export default Cursor;
