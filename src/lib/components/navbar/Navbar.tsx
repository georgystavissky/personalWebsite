import Link from "next/link";

type NavLink = {
    text: string;
    href: string;
}

const navLinks: NavLink[] = [
    {
        text: "Experience",
        href: "#"
    },
    {
        text: "Skills",
        href: "#"
    },
    {
        text: "Contact me",
        href: "#"
    }
];

const Navbar = () => {
    const navItems = navLinks.map((link, i) => 
        <li key={i} className="bg-amber-100 w-40 p-1 rounded-md text-black text-center">
            <Link href={link.href}>
                <p className="w-full">{link.text}</p>
            </Link>
        </li>
    )

    return <nav className="w-[90vw] m-4 bg-gray-200 rounded-xl p-2 absolute">
        <ul className="flex flex-row justify-around">
            {navItems}
        </ul>
    </nav>
}

export default Navbar;