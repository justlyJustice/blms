import styles from "@/styles/teacher/Dashboard.module.css";

const DisplayCard = ({ color }) => {
  return (
    <div
      className={`flex ${styles.displayCard}`}
      style={{
        backgroundColor: color === `pink` ? `var(--pink)` : ``,
      }}
    >
      <div
        className={`flex ${styles.iconContain}`}
        style={{
          backgroundColor: color === `pink` ? `var(--primary)` : ``,
        }}
      >
        <i className="bx bx-user"></i>
      </div>

      <div className={styles.text}>
        <h3>22</h3>
        <p>Courses</p>
      </div>
    </div>
  );
};

export default DisplayCard;
