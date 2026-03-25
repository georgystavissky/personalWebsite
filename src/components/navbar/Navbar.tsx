import Link from "next/link";
import "./navbar.scss";

type NavLink = {
  text: string;
  href: string;
};

const navLinks: NavLink[] = [];

const Navbar = () => {
  return <nav></nav>;
};

export default Navbar;
