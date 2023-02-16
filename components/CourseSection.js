import CourseCard from "./cards/CourseCard";

import styles from "@/styles/Home.module.css";
import courses from "@/data/courses";

const CourseSection = () => {
  return (
    <div className="container">
      <section className={`${styles.coursesSection}`}>
        <div className={`${styles.text_contain} flex`}>
          <h1>Courses</h1>

          <div className={styles.hrs}>
            <hr />
            <hr />
            <hr />
          </div>

          <p>
            Get the most dedication for your life-changing course. Earn
            certification for your effort and passion
          </p>
        </div>

        <div className={`flex ${styles.coursesContain}`}>
          {courses.map((course) => (
            <CourseCard
              courseTitle={course.courseTitle}
              iconName={course.iconName}
              coursePrice={course.coursePrice}
              key={course.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseSection;
