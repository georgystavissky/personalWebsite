"use client";
import { useState, useRef, useEffect } from "react";
import "./navbar.scss";
import { HamburgerSpring } from "react-animated-burgers";
import gsap from "gsap";

interface INavLink {
  content: string;
  addClass?: string;
}

const navLinks: INavLink[] = [
  {
    content: "About",
  },
  {
    content: "Stack",
  },
  {
    content: "Experience",
  },
  {
    content: "Contact",
    addClass: "nav-cta",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const animationRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    const menuItems = menuItemsRef.current.filter((item) => item !== null);
    const links = menuItems.map((item) => item?.querySelector("a"));

    gsap.set(menuRef.current, {
      autoAlpha: 0,
      scaleY: 0,
      transformOrigin: "top center",
    });

    gsap.set(links, {
      y: 20,
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    const menuItems = menuItemsRef.current.filter((item) => item !== null);
    const links = menuItems.map((item) => item?.querySelector("a"));

    if (animationRef.current) {
      animationRef.current.kill();
    }

    if (isMenuOpen) {
      animationRef.current = gsap.timeline();

      animationRef.current
        .to(menuRef.current, {
          duration: 0.5,
          autoAlpha: 1,
          scaleY: 1,
          ease: "power3.out",
        })
        .to(
          links,
          {
            duration: 0.4,
            y: 0,
            opacity: 1,
            stagger: 0.08,
            ease: "back.out(0.6)",
          },
          "-=0.2",
        );
    } else {
      animationRef.current = gsap.timeline();

      animationRef.current
        .to(links, {
          duration: 0.6,
          y: 20,
          opacity: 0,
          stagger: 0.05,
          ease: "power2.in",
        })
        .to(
          menuRef.current,
          {
            duration: 0.8,
            scaleY: 0,
            ease: "power2.in",
          },
          "-=0.1",
        );
    }
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const listEls = navLinks.map((l, i) => (
    <li
      key={i}
      ref={(el) => {
        menuItemsRef.current[i] = el;
      }}
    >
      <a
        href={"#" + l.content.toLowerCase()}
        onClick={handleLinkClick}
        className={l.addClass ?? ""}
      >
        {l.content}
      </a>
    </li>
  ));

  return (
    <nav>
      <a href="#" className="nav-logo">
        Georgii Stavisskii
      </a>
      <ul ref={menuRef} className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {listEls}
      </ul>
      <HamburgerSpring
        barColor="black"
        className="burger-btn"
        isActive={isMenuOpen}
        buttonWidth={20}
        toggleButton={handleMenuToggle}
      />
    </nav>
  );
};

export default Navbar;
