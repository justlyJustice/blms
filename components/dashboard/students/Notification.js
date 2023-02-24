import styles from "@/styles/Students.module.css";

const Notification = ({ showHr = true }) => {
  return (
    <div className={`flex ${styles.notification}`}>
      <div className="flex">
        <p className={styles.time}>3:30pm</p>

        <h5 className={styles.message}>
          Results has been released for JSS2 Biology Exam
        </h5>
      </div>

      {showHr && <hr />}
    </div>
  );
};

export default Notification;
