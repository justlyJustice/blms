import Sidebar from "./Sidebar";

import styles from "@/styles/admin/Layout.module.css";
import TopBar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.content}>
        <TopBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
