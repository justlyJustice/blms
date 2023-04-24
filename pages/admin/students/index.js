import Head from "@/components/Head";
import Layout from "@/components/dashboard/admin/Layout";
import Button from "@/components/Button";
import TopContain from "@/components/dashboard/admin/TopContain";
import StudentsTable from "@/components/dashboard/admin/tables/StudentsTable";

import { logo } from "@/public/assets";
import styles from "@/styles/admin/Dashboard.module.css";

const Students = () => {
  return (
    <Layout>
      <Head
        title="Admin | Enrolled students"
        description="School administrator dashboard"
        image={logo}
      />

      <TopContain />

      <section className={styles.instructorsTable}>
        <div className={`flex justify-space-between ${styles.tableHeader}`}>
          <p className={styles.leadText}>
            42 <span>Students in total</span>
          </p>

          <div className={`flex ${styles.actions}`}>
            <div className={`flex`}>
              <p>
                <i className="bx bx-filter"></i> Filter
              </p>

              <p>
                <i className="bx bx-sort"></i>Sort
              </p>
            </div>

            <Button className={styles.addBtn}>+ New Student</Button>
          </div>
        </div>

        <div className={`flex justify-space-between ${styles.tableHeader}`}>
          <StudentsTable />
        </div>
      </section>
    </Layout>
  );
};

export default Students;
