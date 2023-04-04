import Head from "@/components/Head";
import Layout from "@/components/dashboard/admin/Layout";
import Button from "@/components/Button";

import styles from "@/styles/admin/Dashboard.module.css";
import { avatar, logo } from "@/public/assets";
import InstructorsTable from "@/components/dashboard/admin/tables/InstructorsTable";
import TopContain from "@/components/dashboard/admin/TopContain";

const instructors = [
  {
    createdAt: Date.now(),
    contact: {
      email: "justlyjohn198@gmail.com",
      phone: "+234 (0)8165 802 486",
    },
    id: 0,
    image: avatar,
    name: "Justice Johnson",
    subject: "Mathematics",
  },
  {
    createdAt: Date.now(),
    contact: {
      email: "clarkben2016@gmail.com",
      phone: "+234 (0)8165 802 486",
    },
    id: 1,
    image: avatar,
    name: "Clark Benneth",
    subject: "C.R.S",
  },
  {
    createdAt: Date.now(),
    contact: {
      email: "emmanuelabraham375@gmail.com",
      phone: "+234 (0)8165 802 486",
    },
    id: 2,
    image: avatar,
    name: "Emmanuel Abraham",
    subject: "Computer Science",
  },
  {
    createdAt: Date.now(),
    contact: {
      email: "justlyjohn198@gmail.com",
      phone: "+234 (0)8165 802 486",
    },
    id: 3,
    image: avatar,
    name: "Justice Johnson",
    subject: "Social Studies",
  },
  {
    createdAt: Date.now(),
    contact: {
      email: "justlyjohn198@gmail.com",
      phone: "+234 (0)8165 802 486",
    },
    id: 4,
    image: avatar,
    name: "Justice Johnson",
    subject: "Mathematics",
  },
];

const Instructors = () => {
  return (
    <Layout>
      <Head
        title="Admin | Enrolled Instructors"
        description="School administrator dashboard"
        image={logo}
      />

      <TopContain />

      <section className={styles.instructorsTable}>
        <div className={`flex justify-space-between ${styles.tableHeader}`}>
          <p className={styles.leadText}>
            22 <span>Instructors in total</span>
          </p>

          <div className={`flex ${styles.actions}`}>
            <div className={`flex`}>
              <p>
                <i className="bx bx-check-circle"></i> All status
              </p>

              <p>
                <i className="bx bx-filter"></i> Filter
              </p>

              <p>
                <i className="bx bx-sort"></i>Sort
              </p>
            </div>

            <Button className={styles.addBtn}>+ New Instructor</Button>
          </div>
        </div>

        <InstructorsTable instructors={instructors} />
      </section>
    </Layout>
  );
};

export default Instructors;
