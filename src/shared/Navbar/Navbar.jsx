"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navTexts = ["home", "blog post", "about us", "contact"];
  const navLinks = navTexts.map((item) => (
    <li key={item}>
      <Link
        href={item === "home" ? "/" : `/${item.replaceAll(" ", "-")}`}
        className={`capitalize font-semibold ${
          pathname === "/"
            ? "active"
            : pathname === `/${item.replaceAll(" ", "-")}`
            ? "active"
            : ""
        }`}
      >
        {item}
      </Link>
    </li>
  ));

  return (
    <nav className="flex items-center justify-between gap-5">
      <div>
        <Link href="/">Logo</Link>
      </div>

      <div>
        <ul className="flex items-center gap-3.5">{navLinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
