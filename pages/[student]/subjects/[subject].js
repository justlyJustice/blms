import Button from "@/components/Button";
import Collapse from "@/components/dashboard/students/common/Collapse";
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

          <p>Final Exam commences on the 18th of February, 2023</p>
        </div>

        <div className={`grid grid-3fr ${styles.subjectContain}`}>
          <div className={styles.leftSide}>
            <div className={styles.subjectDesc}>
              <div className={styles.subjectIcon}>
                <div className="bx bxs-react"></div>
              </div>

              <div className={styles.desc}>
                <h2>English Language</h2>

                <p className={styles.descText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  ipsum augue, sodales a justo non, tristique gravida ipsum.
                  Duis placerat placerat sapien eget placerat. In tellus sapien,
                  finibus sit amet ullamcorper sed, hendrerit a
                </p>

                <div
                  className={`${styles.subjectMeta} flex justify-space-around`}
                >
                  <div>
                    <p>
                      Instructor: <span>Emmanuel Abraham</span>
                    </p>
                  </div>

                  <div>
                    <p>
                      Posted On: <span>23rd January, 2023</span>
                    </p>
                  </div>

                  <div>
                    <p>
                      Last Updated: <span>2nd January, February</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Collapse title="What you’ll learn">
              <ul className={`${styles.collapseContent} grid`}>
                <li>
                  Build 16 web development projects for your portfolio, ready to
                  apply for junior developer jobs.
                </li>

                <li>
                  Learn the latest technologies, including Javascript, React,
                  Node and even Web3 development.
                </li>

                <li>
                  After the course you will be able to build ANY website you
                  want.
                </li>

                <li>
                  Build fully-fledged websites and web apps for your startup or
                  business.
                </li>

                <li>Work as a freelance web developer.</li>

                <li>Master frontend development with React</li>

                <li>Master backend development with Node</li>

                <li>Learn professional developer best practices.</li>
              </ul>
            </Collapse>

            <Collapse title="Subject Syllabus"></Collapse>

            <div className={`flex ${styles.subjectButtons}`}>
              <Button alfaSlab background={`brown`} radius={`10px`} width="25%">
                Take Test
              </Button>

              <Button
                alfaSlab
                background={`primary`}
                radius={`10px`}
                width="25%"
              >
                Take Examination
              </Button>
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
