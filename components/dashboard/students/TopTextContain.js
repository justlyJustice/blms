import styles from "@/styles/Students.module.css";

const TopTextContain = ({ title, description }) => {
  return (
    <div className={styles.topTextContain}>
      <div>
        <h2>{title}</h2>
        <p>&gt; {description}</p>
      </div>

      <hr />
    </div>
  );
};

export default TopTextContain;
