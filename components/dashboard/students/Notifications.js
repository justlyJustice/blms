import styles from "@/styles/Students.module.css";
import Notification from "./Notification";

const Notifications = () => {
  return (
    <div className={`flex ${styles.notifications}`}>
      <h4 className={styles.title}>
        <i className="bx bxs-bell"></i> Notification
      </h4>

      <Notification />
      <Notification />
      <Notification showHr={false} />
    </div>
  );
};

export default Notifications;
