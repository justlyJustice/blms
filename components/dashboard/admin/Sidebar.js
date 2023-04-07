import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { avatar, logo } from "@/public/assets";
import styles from "@/styles/admin/Sidebar.module.css";
import Button from "@/components/Button";

const Sidebar = () => {
  const { pathname } = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.topContain}>
        <div>
          <Image
            alt="logo"
            className={styles.logo}
            priority
            width={100}
            src={logo}
          />
          <hr />
        </div>

        {showMenu ? (
          <i
            className={`${styles.navIcon} bx bx-x`}
            onClick={handleShowMenu}
          ></i>
        ) : (
          <i
            className={` ${styles.navIcon} bx bx-align-right`}
            onClick={handleShowMenu}
          ></i>
        )}
      </div>

      <div className={`flex ${styles.menu} ${showMenu ? styles.show : ""}`}>
        <div className={`flex ${styles.links}`}>
          <Link
            className={`${styles.link}  ${
              pathname === "/admin" ? `${styles.active}` : ""
            }`}
            href={`/admin`}
          >
            <i className="bx bxs-dashboard"></i>

            <span>Dashboard</span>
          </Link>

          <Link
            className={`${styles.link}  ${
              pathname === "/admin/instructors" ? `${styles.active}` : ""
            }`}
            href={`/admin/instructors`}
          >
            <i className="bx bx-user-circle"></i>

            <span>Instructors</span>
          </Link>

          <Link
            className={`${styles.link}  ${
              pathname === "/admin/students" ? `${styles.active}` : ""
            }`}
            href={`/admin/students`}
          >
            <i className="bx bxs-user-badge"></i>

            <span>Students</span>
          </Link>

          <Link
            className={`${styles.link}  ${
              pathname === "/admin/events" ? `${styles.active}` : ""
            }`}
            href={`/admin/events`}
          >
            <i className="bx bx-book"></i>

            <span>Events</span>
          </Link>

          <Link className={styles.link} href={`#`}>
            <i className="bx bx-dollar"></i>

            <span>Finance</span>
          </Link>

          <Link className={styles.link} href={`#`}>
            <i className="bx bx-calendar"></i>

            <span>Calendar</span>
          </Link>

          <Link
            className={`${styles.link}  ${
              pathname === "/admin/settings" ? `${styles.active}` : ""
            }`}
            href={`/admin/settings`}
          >
            <i className="bx bx-cog"></i>

            <span>Settings</span>
          </Link>
        </div>

        <div className={styles.authContain}>
          <div className={`flex ${styles.user}`}>
            <Image
              alt="admin-avatar"
              className={styles.avatar}
              width={200}
              src={avatar}
            />

            <div className={styles.nameContain}>
              <h3>Justice Johnson</h3>
              <p>School Administrator</p>
            </div>
          </div>

          <Button className={styles.authBtn}>
            <i className="bx bx-log-in"></i> Log out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
