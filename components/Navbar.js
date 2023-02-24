import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Navbar.module.css";
import { logo } from "@/public/assets";

const Navbar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [isHeightAttained, setIsHeightAttained] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    if (clientWindowHeight > 300) {
      setIsHeightAttained(true);
    } else {
      setIsHeightAttained(false);
    }
  }, [clientWindowHeight]);

  return (
    <nav
      className={`${styles.nav} ${
        isHeightAttained ? `${styles.navFixed}` : ""
      }`}
    >
      <div className={styles.logo}>
        <Image src={logo} width={100} alt="Logo" priority />
      </div>

      <div className={styles.navLinks}>
        <ul className={styles.ul}>
          <li>
            <Link href={`/`}>Home</Link>
          </li>

          <li>
            <Link href="#courses">Courses</Link>
          </li>

          <li>
            <Link href={`/sessions`}>Sessions</Link>
          </li>

          <li>
            <Link href={`/documentation`}>
              Documentation <i className="bx bx-chevron-down"></i>
            </Link>
          </li>

          <li>
            <Link href={`/blog`}>Blog</Link>
          </li>

          <li>
            <Link href={`/contact`}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className={styles.authButtons}>
        <Link className={styles.btn} href="/auth/login">
          Login
        </Link>

        <Link className={styles.btn} href="/auth/register">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
