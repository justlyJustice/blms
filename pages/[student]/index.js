import Head from "@/components/Head";

import { logo } from "@/public/assets";
import styles from "@/styles/Students.module.css";
import Notifications from "@/components/dashboard/students/Notifications";
import Layout from "@/components/dashboard/students/Layout";
import { DisplayCard, TestCard } from "@/components/dashboard/students/cards";
import Button from "@/components/Button";

const StudentDashboard = () => {
  return (
    <Layout className={styles.wrapper}>
      <Head
        title="BLMS | Student Dashboard"
        description="Welcome to your dashboard"
        image={logo}
      />

      <div className={`container ${styles.mainContent}`}>
        <div className={styles.welcomeText}>
          <h3>&gt; WELCOME TO BLMS</h3>
          <p>A comprehensive E-Learning Management for all schools</p>
        </div>

        <div className={`flex ${styles.topSection}`}>
          <div className={`flex ${styles.cards}`}>
            <DisplayCard
              color={`pink`}
              icon={`bxs-file-export`}
              text={`Submit Assignment`}
            />

            <DisplayCard
              icon={`bxs-download`}
              text={`Download Subject Materials`}
            />

            <DisplayCard
              color="pink"
              icon={`bx-user-plus`}
              text={`Create Study Group`}
            />

            <DisplayCard icon={`bx-task`} text={`Take Surveys`} />
          </div>

          <Notifications />
        </div>

        <div className={styles.middleSection}>
          <div className={styles.subjects}>
            <h3>My Subjects</h3>

            <div className={styles.subjectsCard}>
              <div className={styles.enrolled}>
                <p>
                  Enrolled Subjects <span>10</span>
                </p>
              </div>

              <div>
                <div className={styles.singleSubject}>
                  <i className="bx bxs-check-circle"></i>

                  <span>English Language</span>
                </div>

                <div className={styles.singleSubject}>
                  <i className="bx bxs-check-circle"></i>

                  <span>Mathematics</span>
                </div>

                <div className={styles.singleSubject}>
                  <i className="bx bxs-check-circle"></i>

                  <span>Computer Science</span>
                </div>
              </div>

              <Button className={styles.viewBtn} radius={`30px`}>
                View All Enrolled Subjects
              </Button>
            </div>
          </div>

          <div className={styles.reports}>
            <h3>My Report Cards</h3>

            <div className={styles.reportCards}>
              <div className={styles.singleReport}>
                <div className={styles.textContain}>
                  <i className="bx bxs-check-circle"></i>

                  <span>Junior Secondary School 1</span>
                </div>

                <Button className={styles.reportBtn}> View All Terms</Button>
              </div>

              <div className={styles.singleReport}>
                <div className={styles.textContain}>
                  <i className="bx bxs-check-circle"></i>

                  <span>Junior Secondary School 1</span>
                </div>

                <Button className={styles.reportBtn}> View All Terms</Button>
              </div>

              <div className={styles.singleReport}>
                <div className={styles.textContain}>
                  <i className="bx bxs-check-circle"></i>

                  <span>Junior Secondary School 1</span>
                </div>

                <Button className={styles.reportBtn}> View All Terms</Button>
              </div>

              <Button className={styles.viewReportsBtn} radius={`20px`}>
                View All Report Cards
              </Button>
            </div>
          </div>

          <div className={styles.resourcesDownload}>
            <Button>
              <i className="bx bxs-download"></i>

              <span>Download School Timetable</span>
            </Button>

            <Button>
              <i className="bx bxs-download"></i>

              <span>Download Exam Timetable</span>
            </Button>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.exams}>
            <h3>My Exams & Tests</h3>

            <div className={styles.examsCard}>
              <TestCard icon={`bx-atom`} text={`Physics`} />

              <TestCard icon={`bx-book`} text={`English Language`} />

              <TestCard icon={`bx-dna`} text={`Biology`} />

              <TestCard icon={`bx-laptop`} text={`Computer Science`} />

              <Button className={styles.viewExams} radius={`20px`}>
                View All Exams & Tests
              </Button>
            </div>
          </div>

          <div className={styles.forumContain}>
            <h3>My Forum</h3>

            <div className={styles.forumCard}>
              <div className={styles.forums}>
                <div className={styles.singleForum}>
                  <p>Q&A sessions was initiated in an English Class</p>

                  <span className={styles.timeInitiated}>NOW</span>
                </div>

                <div className={styles.singleForum}>
                  <p>Q&A sessions was initiated in an English Class</p>

                  <span className={styles.timeInitiated}>NOW</span>
                </div>
              </div>

              <Button className={styles.viewReportsBtn} radius={`20px`}>
                View All Forums
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
