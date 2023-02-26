import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { logo } from "@/public/assets";
import useWindowHeight from "@/hooks/useWindowHeight";

import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const { isHeightAttained } = useWindowHeight();
  const { pathname } = useRouter();
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav
      className={`${styles.nav} ${
        isHeightAttained ? `${styles.navFixed}` : ""
      }`}
    >
      <div className={styles.logo}>
        <Image src={logo} width={100} alt="Logo" priority />

        {showNav ? (
          <i
            className={`${styles.navIcon} bx bx-x`}
            onClick={handleShowNav}
          ></i>
        ) : (
          <i
            className={` ${styles.navIcon} bx bx-menu`}
            onClick={handleShowNav}
          ></i>
        )}
      </div>

      <div className={`${styles.navLinks} ${showNav ? styles.display : ""}`}>
        <ul className={styles.ul}>
          <Link
            className={`${styles.link} ${
              pathname === "/" ? styles.active : ""
            }`}
            href={`/`}
          >
            Home
          </Link>

          <Link className={styles.link} href="#courses">
            Courses
          </Link>

          <Link className={styles.link} href={`/sessions`}>
            Sessions
          </Link>

          <Link className={styles.link} href={`/documentation`}>
            Documentation <i className="bx bx-chevron-down"></i>
          </Link>

          <Link className={styles.link} href={`/blog`}>
            Blog
          </Link>

          <Link className={styles.link} href={`/contact`}>
            Contact
          </Link>
        </ul>

        <div className={styles.authButtons}>
          <Link className={styles.btn} href="/auth/login">
            Login
          </Link>

          <Link className={styles.btn} href="/auth/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
