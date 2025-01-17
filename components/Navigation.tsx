import React from "react";
import Link from "next/link";
import navStyles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/" className={navStyles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={navStyles.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
