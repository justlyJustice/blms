import Layout from "@/components/dashboard/students/Layout";
import TopTextContain from "@/components/dashboard/students/TopTextContain";

import styles from "@/styles/Students.module.css";

const MyExams = () => {
  return (
    <Layout>
      <TopTextContain title={`My Exams`} description={`General Mathematics`} />

      <div className={`grid grid-3fr ${styles.examsContain}`}>
        <div clssName={styles.examSide}>
          <div className={styles.examInstructions}>
            <p>Instructions</p>

            <ul className={styles.instructions}>
              <li>Ensure all questions with asterisk (*) are answered</li>
              <li>Time is 1hr 30mins</li>
            </ul>
          </div>
        </div>

        <div className={styles.examTimer}>
          <h2>25:12</h2>
          <p>Timer</p>
        </div>
      </div>
    </Layout>
  );
};

export default MyExams;
