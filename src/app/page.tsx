"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/hero/Hero";
import Facts from "@/components/facts/Facts";
import About from "@/components/about/About";
import Stack from "@/components/stack/Stack";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            // футер — последний блок страницы: показываем его, как только он
            // входит в экран, чтобы анимация не зависела от длины прокрутки
            start: el.closest("#contact") ? "clamp(top 98%)" : "clamp(top 88%)",
            toggleActions: "play none none none",
          },
        },
      );
    });

    // высоты секций меняются после загрузки шрифтов — пересчитываем триггеры
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  });

  return (
    <>
      <Hero />
      <Facts />
      <About />
      <Stack />
      <Experience />
      <Contact />
    </>
  );
}
