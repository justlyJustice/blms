import { avatar } from "@/public/assets";
import Image from "next/image";
import Searchbox from "../common/Searchbox";

import styles from "@/styles/teacher/Topbar.module.css";

const TopBar = () => {
  return (
    <div className={`flex ${styles.contain}`}>
      <div className={styles.welcomeText}>
        <h4>
          Welcome back, <span>Justice</span>
        </h4>

        <p>You’re logged in as a Teacher</p>
      </div>

      <Searchbox />

      <div className={`flex ${styles.endItems}`}>
        <div className={styles.notification}>
          <div>
            <i className="bx bx-bell"></i>
          </div>
        </div>

        <div className={`flex ${styles.auth}`}>
          <Image alt="teacher-avatar" height={100} width={100} src={avatar} />

          <div>
            <h3>Justice Johnson</h3>
            <p>Teacher</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
