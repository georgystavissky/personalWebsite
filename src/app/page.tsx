"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "@/components/hero/Hero";
import Stats from "@/components/stats/Stats";
import About from "@/components/about/About";
import Stack from "@/components/stack/Stack";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";

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
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  });

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Stack />
      <Experience />
      <Contact />
    </>
  );
}
