import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { avatar, logo } from "@/public/assets";
import styles from "@/styles/admin/Sidebar.module.css";
import Button from "@/components/Button";

const Sidebar = () => {
  const { pathname, query } = useRouter();
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
              pathname === "/teacher/[teacherId]" ? `${styles.active}` : ""
            }`}
            href={`/teacher/${query.teacherId}`}
          >
            <i className="bx bxs-dashboard"></i>

            <span>Dashboard</span>
          </Link>

          <Link className={styles.link} href={`#`}>
            <i className="bx bxs-user-badge"></i>

            <span>Student</span>
          </Link>

          <Link className={`${styles.link}`} href={`#`}>
            <i className="bx bx-user-circle"></i>

            <span>Attendance</span>
          </Link>

          <Link className={styles.link} href={`#`}>
            <i className="bx bx-book"></i>

            <span>Results</span>
          </Link>

          <Link className={styles.link} href={`#`}>
            <i className="bx bx-dollar"></i>

            <span>Courses</span>
          </Link>

          <Link className={styles.link} href={`#`}>
            <i className="bx bx-calendar"></i>

            <span>Live Classes</span>
          </Link>

          <Link className={styles.link} href={`#`}>
            <i className="bx bx-cog"></i>

            <span>Chats</span>
          </Link>

          <Link className={styles.link} href={`#`}>
            <i className="bx bx-cog"></i>

            <span>Settings</span>
          </Link>
        </div>

        <div className={styles.authContain}>
          <Button className={styles.authBtn}>
            <i className="bx bx-log-out"></i> Log out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
