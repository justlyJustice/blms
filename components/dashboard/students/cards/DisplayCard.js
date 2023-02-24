import Link from "next/link";

import styles from "@/styles/Students.module.css";

const colors = {
  brown: "#e38a04",
  dark: "#1e1e1e",
  primary: "#b51aae",
  purple: "#320839",
  white: "#ffffff",
};

const DisplayCard = ({ color, icon, href = `#`, text }) => {
  return (
    <Link
      style={{ backgroundColor: colors[color] }}
      href={href}
      className={styles.card}
    >
      <i className={`bx ${icon}`}></i>

      <h3>{text}</h3>
    </Link>
  );
};

export default DisplayCard;
