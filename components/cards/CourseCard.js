import styles from "@/styles/CourseCard.module.css";

const CourseCard = ({ iconName, courseTitle, coursePrice }) => {
  return (
    <div className={`${styles.contain} flex flex-column`}>
      <i className={iconName}></i>

      <div>
        <h4>{courseTitle}</h4>
      </div>

      <div className={styles.priceContain}>
        <p>{coursePrice}</p>
      </div>
    </div>
  );
};

export default CourseCard;
