import styles from "@/styles/Students.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      <Navbar />

      <div className="container"> {children}</div>
    </section>
  );
};

export default Layout;
