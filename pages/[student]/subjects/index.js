import { SubjectCard } from "@/components/dashboard/students/cards";
import Layout from "@/components/dashboard/students/Layout";
import Head from "@/components/Head";

import styles from "@/styles/Students.module.css";
import { useRouter } from "next/router";

const Subjects = () => {
  const router = useRouter();

  return (
    <Layout>
      <Head
        title={router.query.student + " | My Subjects"}
        description={`View all enrolled subjects`}
      />

      <div className={styles.allSubjects}>
        <div className={styles.topTextContain}>
          <div>
            <h2>My Subjects</h2>
            <p>&gt; Enrolled Subjects</p>
          </div>

          <hr />
        </div>

        <div className="flex justify-space-evenly flex-wrap">
          <SubjectCard
            icon={`bxs-file-export`}
            text={`English Language`}
            subjectId={`english-language`}
          />

          <SubjectCard icon={`bxs-file-export`} text={`General Mathematics`} />

          <SubjectCard icon={`bxs-file-export`} text={`Physics`} />

          <SubjectCard icon={`bxs-file-export`} text={`Computer Science`} />

          <SubjectCard icon={`bxs-file-export`} text={`Biology`} />

          <SubjectCard icon={`bxs-file-export`} text={`Chemistry`} />

          <SubjectCard icon={`bxs-file-export`} text={`Agricultural Science`} />

          <SubjectCard icon={`bxs-file-export`} text={`Financial Accounting`} />

          <SubjectCard icon={`bxs-file-export`} text={`Economics`} />

          <SubjectCard icon={`bxs-file-export`} text={`Geography`} />

          <SubjectCard icon={`bxs-file-export`} text={`C.R.S`} />

          <SubjectCard icon={`bxs-file-export`} text={`Marketing`} />
        </div>
      </div>
    </Layout>
  );
};

export default Subjects;
