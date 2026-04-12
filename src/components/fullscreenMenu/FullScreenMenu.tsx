"use client";
import "./menu.scss";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "#", label: "Home" },
  { path: "#", label: "Work" },
  { path: "#", label: "Contact" },
];

const FullScreenMenu = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<GSAPTimeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-overlay", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.easeInOut",
          delay: -0.75,
        });
    },
    { scope: container },
  );

  useEffect(() => {
    if (isMenuOpen) {
      if (tl.current) {
        tl.current.play();
      }
    } else {
      if (tl.current) {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">Logo</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
        <div className="menu-overlay">
          <div className="menu-overlay-bar">
            <div className="menu-logo">
              <Link href="/">Logo</Link>
            </div>
            <div className="menu-close-icon" onClick={toggleMenu}>
              <p>&#x2715;</p>
            </div>
          </div>
          <div className="menu-copy">
            <div className="menu-links">
              {menuLinks.map((link, index) => (
                <div className="menu-link-item" key={index}>
                  <div className="menu-link-item-holder" onClick={toggleMenu}>
                    <Link href={link.path} className="menu-link">
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="menu-info">
              <div className="menu-info-col">
                <a href="#">Home</a>
                <a href="#">Work</a>
                <a href="#">Contact</a>
              </div>
              <div className="menu-info-col">
                <p>My email</p>
                <p>4584340578</p>
              </div>
              <div className="menu-preview">
                <p>View Showreel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenMenu;
