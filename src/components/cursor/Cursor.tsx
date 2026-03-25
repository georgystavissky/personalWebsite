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
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("hovering"),
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("hovering"),
      );
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
