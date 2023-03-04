import styles from "@/styles/training-portal/Portal.module.css";

const CourseCard = ({ iconName = "", courseName = "" }) => {
  return (
    <div className={`${styles.courseCard} flex flex-column`}>
      <div>
        <i className={`bx ${iconName}`}></i>
      </div>

      <h3>{courseName}</h3>
    </div>
  );
};

export default CourseCard;
