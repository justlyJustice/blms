import Button from "@/components/Button";
import Layout from "@/components/dashboard/students/Layout";
import TopTextContain from "@/components/dashboard/students/TopTextContain";

import styles from "@/styles/Students.module.css";

const Subject = ({ subject }) => {
  return (
    <Layout>
      <div className={styles.allSubjects}>
        <TopTextContain
          description={
            `Enrolled Subjects || ` + subject.first + ` ` + subject.second
          }
          title={`My Subjects`}
        />

        <div className={`flex ${styles.annoucement}`}>
          <div className={`flex ${styles.bellCircle}`}>
            <i className="bx bxs-bell"></i>
          </div>

          <p>
            Final Exam commences on the 18<sup>th</sup> of February, 2023
          </p>
        </div>

        <div className={`grid grid-3fr ${styles.subjectContain}`}>
          <div>
            <div>
              <h2>English Language</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ipsum augue, sodales a justo non, tristique gravida ipsum. Duis
                placerat placerat sapien eget placerat. In tellus sapien,
                finibus sit amet ullamcorper sed, hendrerit a{" "}
              </p>
            </div>
          </div>

          <div>
            <Button alfaSlab radius={`20px`}>
              Download E-book
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = (context) => {
  const subject = context.params.subject;

  return {
    props: {
      subject: {
        first: subject.split(`-`)[0],
        second: subject.split(`-`)[1],
      },
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          student: `John`,
          subject: `english-language`,
        },
      },
    ],
    fallback: false,
  };
};

export default Subject;
