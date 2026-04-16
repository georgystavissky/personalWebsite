"use client";
import { useRef } from "react";
import "./navbar.scss";

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
  const menuRef = useRef<HTMLUListElement>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const listEls = navLinks.map((l, i) => (
    <li
      key={i}
      ref={(el) => {
        menuItemsRef.current[i] = el;
      }}
    >
      <a href={"#" + l.content.toLowerCase()} className={l.addClass ?? ""}>
        {l.content}
      </a>
    </li>
  ));

  return (
    <nav>
      <a href="#" className="nav-logo">
        Georgii Stavisskii
      </a>
      <ul ref={menuRef} className={"nav-links"}>
        {listEls}
      </ul>
    </nav>
  );
};

export default Navbar;
