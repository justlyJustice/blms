import Sidebar from "./Sidebar";

import styles from "@/styles/admin/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
