import styles from "@/styles/admin/EvaluationCard.module.css";

const EvaluationCard = ({ color }) => {
  return (
    <div
      className={`${styles.card} flex flex-column`}
      style={{
        backgroundColor:
          color === `primary` ? `var(--primary)` : `var(--dark-purple)`,
      }}
    >
      <div className={styles.text}>
        <h1>53</h1>
        <p>Students</p>
      </div>

      <div
        className={styles.class}
        style={{
          backgroundColor:
            color === `primary` ? `var(--dark-purple)` : `var(--primary)`,
        }}
      >
        <p>JSS 1</p>
      </div>
    </div>
  );
};

export default EvaluationCard;
