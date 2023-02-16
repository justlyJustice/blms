import styles from "@/styles/Home.module.css";

const CoverSection = () => {
  return (
    <section className={`${styles.coverSection}`}>
      <div className={`${styles.coverSectionContent} container`}>
        <div className={styles.cover_circle}>
          <h3>500+</h3>
          <p>Enrolled Students</p>
        </div>

        <div className={styles.cover_circle}>
          <h3>25+</h3>
          <p>Online Courses</p>
        </div>

        <div className={styles.cover_circle}>
          <h3>100%</h3>
          <p>Satisfaction</p>
        </div>

        <div className={styles.cover_circle}>
          <h3>100%</h3>
          <p>Technical Support</p>
        </div>
      </div>
    </section>
  );
};

export default CoverSection;
