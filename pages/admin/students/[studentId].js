import Image from "next/image";

import Collapse from "@/components/dashboard/students/common/Collapse";
import Head from "@/components/Head";
import Layout from "@/components/dashboard/admin/Layout";
import TopContain from "@/components/dashboard/admin/TopContain";

import students from "@/data/students";

import { avatar } from "@/public/assets";
import styles from "@/styles/admin/Student.module.css";
import RefereeCard from "@/components/dashboard/admin/cards/RefereeCard";

const Student = ({ student }) => {
  return (
    <Layout>
      <Head
        title={"Student | " + student.id}
        description="View a single student page"
      />

      <TopContain />

      <section className={styles.profileContain}>
        <div className={`flex ${styles.profileCover}`}>
          <div className={`flex ${styles.profileText}`}>
            <div className={styles.profilePic}>
              <Image alt="profile-pic" fill src={avatar} />
            </div>

            <div className={styles.profileInfo}>
              <h2>
                {student.name}{" "}
                <span className="font-poppins">ID: {student.id}</span>
              </h2>

              <p className="font-poppins">{student.grade}</p>
            </div>
          </div>
        </div>

        <div className={styles.studentInfo}>
          <Collapse
            id={styles.collapse}
            render={
              <div className="flex">
                <i className="bx bx-user"></i>
                <h3>Personal Information</h3>
              </div>
            }
          >
            <div className={`font-poppins ${styles.body}`}>
              <p>
                Tom Riddle is a 17-year-old student at Apex Academy, a
                prestigious high school known for its rigorous academic
                programs. He is a diligent and hardworking student who excels in
                his studies, particularly in mathematics and science. Tom is
                also an avid reader and enjoys exploring topics related to
                history and philosophy in his free time.
              </p>

              <p>
                Tom has a strong sense of integrity and a deep curiosity about
                the world around him. He aspires to pursue a career in
                engineering and hopes to one day use his knowledge to make a
                positive impact on society.
              </p>
            </div>
          </Collapse>

          <Collapse
            id={styles.collapse}
            render={
              <div className="flex">
                <i className="bx bx-trophy"></i>
                <h3>Achievements</h3>
              </div>
            }
          >
            <div className={`font-poppins ${styles.body}`}>
              <ol type="1">
                <li>
                  Academic Excellence: Tom Riddle consistently maintained top
                  grades in all of his classes, demonstrating a remarkable
                  aptitude for a wide range of subjects, including Potions,
                  Transfiguration, and Defense Against the Dark Arts.
                </li>

                <li>
                  Exceptional Leadership: Tom Riddle displayed exceptional
                  leadership skills and was a key member of several student
                  organizations. He founded and led the school's Dark Arts Club,
                  where he inspired his peers with his charisma and vision.
                </li>
              </ol>
            </div>
          </Collapse>

          <Collapse
            id={styles.collapse}
            render={
              <div className="flex">
                <i className="bx bx-trophy"></i>
                <h3>Skills & Interest</h3>
              </div>
            }
          >
            <div className={`font-poppins ${styles.body}`}>
              <ol type="1">
                <li>
                  As a student at Apex Academy, he is interested in politics or
                  leadership, and seek out opportunities to assert his authority
                  over others.
                </li>

                <li>
                  He is also interested in genealogy, mythology, or other
                  subjects that relate to understanding the past and one's own
                  roots.
                </li>

                <li>
                  He is also interested in the science of longevity or the
                  philosophy of mortality, and seek out ways to extend his own
                  life or cheat death altogether.
                </li>
              </ol>
            </div>
          </Collapse>

          <Collapse
            id={styles.collapse}
            render={
              <div className="flex">
                <i className="bx bx-trophy"></i>
                <h3>Leadership Positions</h3>
              </div>
            }
          >
            <div className={`font-poppins ${styles.body}`}>
              <ol type="1">
                <li>
                  As a student at Apex Academy, he is interested in politics or
                  leadership, and seek out opportunities to assert his authority
                  over others.
                </li>

                <li>
                  He is also interested in genealogy, mythology, or other
                  subjects that relate to understanding the past and one's own
                  roots.
                </li>

                <li>
                  He is also interested in the science of longevity or the
                  philosophy of mortality, and seek out ways to extend his own
                  life or cheat death altogether.
                </li>
              </ol>
            </div>
          </Collapse>

          <Collapse
            id={styles.collapse}
            render={
              <div className="flex">
                <i className="bx bx-trophy"></i>
                <h3>References</h3>
              </div>
            }
          >
            <div
              className={`flex justify-space-evenly font-poppins ${styles.body}`}
            >
              <RefereeCard />
            </div>
          </Collapse>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticPaths = () => {
  const ids = students.map((student) => student.id);

  const paths = ids.map((id) => ({
    params: {
      studentId: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const result = students.filter(
    (student) => student.id == context.params.studentId
  );

  return {
    props: {
      student: result[0],
    },
  };
};

export default Student;
