import Image from "next/image";
import Link from "next/link";

import Layout from "@/components/dashboard/admin/Layout";
import TopContain from "@/components/dashboard/admin/TopContain";

import { avatar } from "@/public/assets";
import styles from "@/styles/admin/Dashboard.module.css";
import Button from "@/components/Button";
import {
  Form,
  Input,
  InputGroup,
  SubmitButton,
  TextAreaGroup,
} from "@/components/forms";

const Settings = () => {
  const values = {
    fullname: "Michalle Johnson",
    phoneno: ``,
    email: ``,
    dob: ``,
    country: ``,
    bio: ``,
  };

  return (
    <Layout>
      <TopContain />

      <section className={`${styles.accountSection}`}>
        <div className={styles.acctInfo}>
          <div className={styles.topText}>
            <h2>Account Settings</h2>
            <p>Update your photo and personal details here</p>
          </div>

          <div className={styles.acctForm}>
            <Form
              initialValues={{
                fullname: "Michalle Jo",
                phoneno: ``,
                email: ``,
                dob: ``,
                country: ``,
                bio: ``,
              }}
            >
              <InputGroup
                name={`fullname`}
                label="Full Name"
                placeholder={`Your full name here`}
              />

              <div className={`flex`}>
                <InputGroup label="Phone" />

                <InputGroup label="Email" />
              </div>

              <div className={`flex`}>
                <InputGroup label="Date of Birth" type={`date`} />

                <InputGroup label="Country" />
              </div>

              <TextAreaGroup label="Update Bio" />

              <div className={`flex ${styles.btns}`}>
                <Button>Cancel</Button>

                <SubmitButton background={`purple`}>Save</SubmitButton>
              </div>
            </Form>
          </div>
        </div>

        <div className={styles.acctUpdate}>
          <div className={`flex flex-column ${styles.updatePhoto}`}>
            <Image
              alt="profile-pic"
              className={styles.avatar}
              src={avatar}
              width={100}
              height={100}
            />

            <div>
              <p>Click to upload or update your profile photo</p>
            </div>

            <Button className={styles.photobtn} background={`purple`}>
              Upload Photo
            </Button>
          </div>

          <div className={`flex flex-column ${styles.preferences}`}>
            <h3>Other Account Settings</h3>

            <div className={`flex flex-column ${styles.prefLinks}`}>
              <Link href={`#`}>
                <i className="bx bx-check-shield"></i>
                Security & Login
              </Link>

              <Link href={`#`}>
                <i className="bx bx-bell"></i>
                Push Notification
              </Link>

              <Link href={`#`}>
                <i className="bx bx-envelope"></i>
                Email Preferences
              </Link>

              <Link href={`#`}>
                <i className="bx bx-globe"></i>
                Language & Region
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Settings;
