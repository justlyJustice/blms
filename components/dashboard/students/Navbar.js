import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Students.module.css";
import { logo } from "@/public/assets";
import { Form, Input } from "@/components/forms";
import { useState } from "react";
import useWindowHeight from "@/hooks/useWindowHeight";

const Navbar = () => {
  const { pathname, query } = useRouter();
  const [expandNav, setExpandNav] = useState(false);
  const { isHeightAttained } = useWindowHeight();

  const handleExpandNav = () => {
    setExpandNav(!expandNav);
  };

  return (
    <nav className={`${styles.nav} ${isHeightAttained ? styles.navFixed : ""}`}>
      <div className={styles.logo}>
        <Image src={logo} width={100} alt="Logo" priority />

        {expandNav ? (
          <i
            className={`${styles.navIcon} bx bx-x`}
            onClick={handleExpandNav}
          ></i>
        ) : (
          <i
            className={` ${styles.navIcon} bx bx-menu`}
            onClick={handleExpandNav}
          ></i>
        )}
      </div>

      <div
        className={`flex ${styles.navMenu} ${expandNav ? styles.expanded : ""}`}
      >
        <div className={styles.navLinks}>
          <ul className={styles.ul}>
            <Link
              className={`${styles.link} ${
                pathname === "/[student]" ? styles.active : ``
              }`}
              href={`/` + query.student}
            >
              Dashboard
            </Link>
            <Link
              className={`${styles.link} ${
                pathname === "/[student]/subjects" ? styles.active : ``
              }`}
              href={`/${query.student}/subjects`}
            >
              My Courses <i className="bx bx-chevron-down"></i>
            </Link>
            <Link
              className={`${styles.link} ${
                pathname === "/resources" ? styles.active : ``
              }`}
              href={`/resources`}
            >
              Resources <i className="bx bx-chevron-down"></i>
            </Link>
            <Link
              className={`${styles.link} ${
                pathname === "/student/discussions" ? styles.active : ``
              }`}
              href={`/student/discussions`}
            >
              Discuss <i className="bx bx-chevron-down"></i>
            </Link>
            <Link
              className={`${styles.link} ${
                pathname === "/student/tests" ? styles.active : ``
              }`}
              href={`/student/tests`}
            >
              Tests <i className="bx bx-chevron-down"></i>
            </Link>
          </ul>
        </div>

        <div className={`flex ${styles.endContain}`}>
          <Form initialValues={{ keyword: `` }}>
            <Input
              name={`keyword`}
              placeholder={`Search Courses`}
              radius={`5px`}
            />
          </Form>

          <div className={`flex ${styles.auth}`}>
            <i className="bx user-icon bx-user"></i>
            <div className={`flex ${styles.username}`}>
              <p>Hi, {query.student} </p> <i className="bx bx-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
