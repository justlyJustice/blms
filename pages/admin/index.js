import Link from "next/link";

import Button from "@/components/Button";
import Head from "@/components/Head";
import Layout from "@/components/dashboard/admin/Layout";
import { EvaluationCard, TopCard } from "@/components/dashboard/admin/cards";
import { Form, Input } from "@/components/forms";
import { logo } from "@/public/assets";
import styles from "@/styles/admin/Dashboard.module.css";

const Dashboard = () => {
  return (
    <Layout>
      <Head
        title="Dashboard | Admin"
        description="School administrator dashboard"
        image={logo}
      />

      <div className={`flex ${styles.topContainer}`}>
        <div className={`flex ${styles.topLeft}`}>
          <div className={styles.welcomeText}>
            <h4>
              Welcome back, <span>Deon</span>
            </h4>

            <p>You’re logged in as an Admin</p>
          </div>

          <div className={`flex ${styles.searchbox}`}>
            <i className="bx bx-search-alt"></i>
            <Form initialValues={{ term: "" }}>
              <Input placeholder={`Search`} name={`term`} />
            </Form>
          </div>
        </div>

        <div className={`flex ${styles.topRight}`}>
          <Button>
            <i className="bx bx-user-plus"></i> New Admission
          </Button>

          <div className={`flex ${styles.info}`}>
            <div>
              <i className="bx bx-comment-dots bx-flip-horizontal"></i>
            </div>

            <div>
              <i className="bx bx-bell"></i>
            </div>
          </div>
        </div>
      </div>

      <div className={`grid grid-3fr ${styles.dashboardContent}`}>
        <div className={styles.sideContent}>
          <div className={`flex ${styles.cardsContain}`}>
            <div className={`flex ${styles.cards}`}>
              <TopCard />

              <TopCard
                numOf="25"
                iconName="bxs-user-badge"
                info="Instructors"
              />

              <TopCard numOf="10" iconName="bx-book-open" info="Courses" />

              <TopCard
                numOf="25"
                iconName="bxs-user-badge"
                info="Instructors"
              />
            </div>

            <div className={styles.assignedTeachers}>
              <div className={styles.startText}>
                <h3>Assign Teachers</h3>
                <p>Names of Teachers to be assigned.</p>
              </div>

              <div className={styles.teacher}>
                <div className={`flex`}>
                  <span></span>

                  <div>
                    <h4>Clark Sophia</h4>
                    <p>Civic Education Teacher</p>
                  </div>
                </div>

                <hr />
              </div>

              <div className={styles.teacher}>
                <div className={`flex`}>
                  <span></span>

                  <div>
                    <h4>Dearie Justly</h4>
                    <p>Computer Science Teacher</p>
                  </div>
                </div>

                <hr />
              </div>

              <div className={styles.teacher}>
                <div className={`flex`}>
                  <span></span>

                  <div>
                    <h4>Emmanuel Glory</h4>
                    <p>Biology Teacher</p>
                  </div>
                </div>

                <hr />
              </div>

              <div className={styles.teacher}>
                <div className={`flex`}>
                  <span></span>

                  <div>
                    <h4>Favour Abel</h4>
                    <p>Agric Science Teacher</p>
                  </div>
                </div>

                <hr />
              </div>
            </div>
          </div>

          <div className={styles.classEvaluation}>
            <div
              className={`flex justify-space-between ${styles.evalTopContain}`}
            >
              <h3>Class Evaluation</h3>

              <span>
                <i className="bx bx-chevron-left-circle"></i>

                <i className="bx bx-chevron-right-circle"></i>
              </span>
            </div>

            <div className={`flex ${styles.evaluation}`}>
              <EvaluationCard />
              <EvaluationCard color={`primary`} />
              <EvaluationCard />
              <EvaluationCard color={`primary`} />
              <EvaluationCard />
            </div>

            <div></div>
          </div>

          <div className={styles.timetableUpload}>
            <h3>Upload School Timetable</h3>

            <div className={`flex ${styles.uploadedInfo}`}>
              <div className={`flex ${styles.div1}`}>
                <div className="flex justify-space-center">
                  <i className="bx bxs-file-export"></i>
                </div>

                <div>
                  <p>Timetable for 2022/2023 Session</p>

                  <span>Lorem ipsum dolor sit amet consectetur aenean.</span>
                </div>
              </div>

              <div className={`flex ${styles.div2}`}>
                <div>
                  <p>Uploaded on</p>
                  <span>27th Feb., 2022</span>
                </div>

                <Button background={`brown`}>Upload</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.endContent}>
          <div className={styles.btnContains}>
            <Button background={`white`} color={`brown`}>
              <i className="bx bx-book-content"></i> Generate Result
            </Button>

            <Button>
              <i className="bx bxs-file-plus"></i> Create Survey
            </Button>

            <Button background={`brown`}>
              <i className="bx bxs-file-export"></i> Upload Report Card
            </Button>
          </div>

          <div className={styles.events}>
            <div className={`flex ${styles.eventsLink}`}>
              <h3>Upcoming Events</h3>

              <Link href={`#`}>See all</Link>
            </div>

            <div className={`flex justify-space-between ${styles.eventItem}`}>
              <div className={styles.date}>
                <p>
                  <span>14</span> <br /> Feb
                </p>
              </div>

              <div className={styles.detail}>
                <p>School Career Day</p>
                <span>Event 2023</span>
              </div>
            </div>

            <div className={`flex justify-space-between ${styles.eventItem}`}>
              <div className={styles.date}>
                <p>
                  <span>14</span> <br /> Feb
                </p>
              </div>

              <div className={styles.detail}>
                <p>School Career Day</p>
                <span>Event 2023</span>
              </div>
            </div>

            <Button>+ New Event</Button>
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
