import Image from "next/image";
import Link from "next/link";

import Head from "@/components/Head";
import Layout from "@/components/dashboard/teacher/Layout";
import TopBar from "@/components/dashboard/teacher/TopBar";
import { DisplayCard } from "@/components/dashboard/teacher/cards";
import { logo } from "@/public/assets";

import styles from "@/styles/teacher/Dashboard.module.css";

const Dashboard = () => {
  return (
    <Layout>
      <Head
        description="Teacher dasboard to manage class activities"
        image={logo}
        title="Dashboard | Teacher"
      />

      <TopBar />

      <div className={`flex ${styles.content}`}>
        <div className={styles.leftItems}>
          <div className={`flex ${styles.displayCards}`}>
            <DisplayCard />
            <DisplayCard color={`pink`} />
            <DisplayCard />
          </div>

          <div className={styles.latestCourses}>
            <div className={`flex justify-space-between ${styles.header}`}>
              <h2>Latest Courses Uploaded</h2>

              <Link href={`#`}>See More</Link>
            </div>

            <div className={`styles.coursesContain`}>
              <div className={`flex ${styles.singleCourse}`}>
                <div className={styles.courseImage}>
                  <Image
                    alt="course-img"
                    src={`/assets/success-course.jpg`}
                    height={100}
                    width={100}
                  />
                </div>

                <div>
                  <h3>Ten Tips for Success</h3>
                  <p>
                    Ten tips for success is an amazing course; it is a course
                    that would help students increase their knowlege and give
                    them more insight on success.
                  </p>
                </div>

                <i className="bx bx-dots-vertical-rounded"></i>
              </div>
            </div>
          </div>

          <div className={`flex ${styles.bottomCards}`}>
            <div className={`flex ${styles.card}`}>
              <i className="bx bxs-report"></i>

              <div>
                <h4>Generate Reports</h4>
              </div>
            </div>

            <div className={`flex ${styles.card}`}>
              <i className="bx bxs-report"></i>

              <div>
                <h4>Generate Reports</h4>
              </div>
            </div>

            <div className={`flex ${styles.card}`}>
              <i className="bx bxs-report"></i>

              <div>
                <h4>Generate Reports</h4>
              </div>
            </div>

            <div className={`flex ${styles.card}`}>
              <i className="bx bxs-report"></i>

              <div>
                <h4>Generate Reports</h4>
              </div>
            </div>

            <div className={`flex ${styles.card}`}>
              <i className="bx bxs-report"></i>

              <div>
                <h4>Generate Reports</h4>
              </div>
            </div>

            <div className={`flex ${styles.card}`}>
              <i className="bx bxs-report"></i>

              <div>
                <h4>Generate Reports</h4>
              </div>
            </div>

            <div className={`flex ${styles.card}`}>
              <i className="bx bxs-report"></i>

              <div>
                <h4>Generate Reports</h4>
              </div>
            </div>

            <div className={`flex ${styles.card}`}>
              <i className="bx bxs-report"></i>

              <div>
                <h4>Generate Reports</h4>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightItems}>
          <div className={styles.topStudents}>
            <p className={styles.topTitle}>Top Performing Students</p>

            <div className={styles.student}>
              <Image
                alt="course-img"
                src={`/assets/success-course.jpg`}
                height={100}
                width={100}
              />

              <div>
                <h4>Alfred Izontimi</h4>
                <p>Class: J.S.S.1</p>
              </div>
            </div>
            <div className={styles.student}>
              <Image
                alt="course-img"
                src={`/assets/success-course.jpg`}
                height={100}
                width={100}
              />

              <div>
                <h4>Alfred Izontimi</h4>
                <p>Class: J.S.S.1</p>
              </div>
            </div>
          </div>

          <div className={styles.newsFeed}>
            <div className={`flex justify-space-between ${styles.eventsLink}`}>
              <h3>News Feed</h3>

              <Link href={`#`}>See all</Link>
            </div>

            <div className={styles.feeds}>
              <div className={`flex ${styles.singleFeed}`}>
                <div>
                  <p className={styles.title}>Notice of Public Holiday</p>

                  <span className={styles.message}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque aut optio ipsam amet asperiores minus placeat, error
                    nisi, consequatur impedit tempora nostrum fuga sequi at iste
                    facere reiciendis quas? Beatae!
                  </span>
                </div>

                <i className="bx bx-chevron-right"></i>
              </div>

              <div className={`flex ${styles.singleFeed}`}>
                <div>
                  <p className={styles.title}>Notice of Public Holiday</p>

                  <span className={styles.message}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque aut optio ipsam amet asperiores minus placeat, error
                    nisi, consequatur impedit tempora nostrum fuga sequi at iste
                    facere reiciendis quas? Beatae!
                  </span>
                </div>

                <i className="bx bx-chevron-right"></i>
              </div>

              <div className={`flex ${styles.singleFeed}`}>
                <div>
                  <p className={styles.title}>Notice of Public Holiday</p>

                  <span className={styles.message}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque aut optio ipsam amet asperiores minus placeat, error
                    nisi, consequatur impedit tempora nostrum fuga sequi at iste
                    facere reiciendis quas? Beatae!
                  </span>
                </div>

                <i className="bx bx-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
