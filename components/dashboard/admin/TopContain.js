import Button from "@/components/Button";
import { Form, Input } from "@/components/forms";

import styles from "@/styles/admin/Dashboard.module.css";

const TopContain = () => {
  return (
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
  );
};

export default TopContain;
