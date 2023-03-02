import styles from "@/styles/admin/Dashboard.module.css";

const TopCard = ({
  numOf = "180",
  iconName = "bx-user",
  info = "Students",
}) => {
  return (
    <div className={`flex ${styles.card}`}>
      <div className={styles.icon}>
        <i className={`bx ${iconName}`}></i>
      </div>

      <div className={styles.cardText}>
        <h3>{numOf}</h3>
        <p>{info} added</p>
      </div>

      <i className={`bx ${iconName} ${styles.overLayIcon}`}></i>
    </div>
  );
};

export default TopCard;
