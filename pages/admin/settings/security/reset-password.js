import Image from "next/image";
import Link from "next/link";

import Head from "@/components/Head";
import { Form, InputGroup, SubmitButton } from "@/components/forms";

import { logo } from "@/public/assets";
import styles from "@/styles/admin/Dashboard.module.css";

const AdminResetPassword = () => {
  return (
    <>
      <Head
        title="Settings | Reset Password"
        description="Admin reset password page"
        image={`/assets/logo.png`}
      />

      <section className="flex justify-space-center h-100">
        <div
          className={`flex flex-column justify-space-center ${styles.resetForm}`}
        >
          <Image alt="logo" src={logo} className={styles.logoImg} />

          <div className="w-100">
            <h2>Reset Password</h2>

            <Form
              initialValues={{
                current: `just#ce_Mad@`,
                new: ``,
                confirm_password: ``,
              }}
            >
              <InputGroup
                name={`current`}
                type={`password`}
                label={`Current Password`}
              />

              <InputGroup
                name={`new`}
                type={`password`}
                label={`New Password`}
              />

              <InputGroup
                name={`confirm_password`}
                type={`password`}
                label={`Confirm New Password`}
              />

              <div className="mt-20">
                <SubmitButton background={`purple`}>Save Changes</SubmitButton>

                <p>
                  Have an account? <Link href={`#`}>Login</Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminResetPassword;
