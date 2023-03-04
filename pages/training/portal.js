import { useState } from "react";
import Head from "@/components/Head";
import {
  CourseCard,
  UploadCard,
} from "@/components/dashboard/training-portal/cards";
import Layout from "@/components/dashboard/training-portal/Layout";

import styles from "@/styles/training-portal/Portal.module.css";

const TrainingPortal = () => {
  const [direction, setDirection] = useState("row");

  return (
    <Layout>
      <Head
        title="BLMS | Training Portal"
        description="Boungbai Learning Management System (BLMS) training for teachers"
      />

      <div className={`grid grid-3fr ${styles.mainContent}`}>
        <div className={styles.leftItems}>
          <div className={styles.uploadedCourses}>
            <div className={`flex ${styles.header}`}>
              <h3>View Uploaded Courses</h3>

              <div className={`flex ${styles.layoutSwitch}`}>
                <div
                  className={direction === "column" ? styles.activeLayout : ""}
                  onClick={() => setDirection("column")}
                >
                  <i className="bx bx-menu"></i>
                </div>

                <div
                  className={direction === "row" ? styles.activeLayout : ""}
                  onClick={() => setDirection("row")}
                >
                  <i className="bx bxs-grid-alt"></i>
                </div>
              </div>
            </div>

            <div
              className={`flex ${direction === "column" ? "flex-column" : ""} ${
                styles.courseBody
              } `}
            >
              <CourseCard iconName="bx-heart" courseName="Biology" />
              <CourseCard iconName="bx-heart" courseName="Biology" />
              <CourseCard iconName="bx-heart" courseName="Biology" />
              <CourseCard iconName="bx-heart" courseName="Biology" />
              <CourseCard iconName="bx-heart" courseName="Biology" />
              <CourseCard iconName="bx-heart" courseName="Biology" />
            </div>
          </div>

          <div className={styles.uploadResource}>
            <h3 className={styles.title}>Upload New Resource</h3>

            <div className={`flex ${styles.resources}`}>
              {[
                "Upload Videos",
                "Upload Powerpoint",
                "Upload Survey",
                "Upload Report",
              ].map((text) => (
                <UploadCard key={text} text={text} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className={styles.notifications}></div>
          <div className={styles.help}></div>
        </div>
      </div>
    </Layout>
  );
};

export default TrainingPortal;
