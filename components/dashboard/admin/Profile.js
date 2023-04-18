import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@/components/dashboard/admin/Layout";
import TopContain from "@/components/dashboard/admin/TopContain";
import Button from "@/components/Button";
import Head from "@/components/Head";
import {
  Form,
  SelectGroup,
  InputGroup,
  SubmitButton,
  TextAreaGroup,
} from "@/components/forms";

import { avatar } from "@/public/assets";
import styles from "@/styles/admin/Dashboard.module.css";

const Profile = () => {
  const router = useRouter();

  const formValues = {
    fullname: "Ella Dandison",
    phoneno: ``,
    date: ``,
    email: ``,
    dob: ``,
    country: ``,
    bio: ``,
  };

  switch (router.query.tab) {
    case `profile`:
      break;

    default:
      break;
  }

  return (
    <Layout>
      <Head
        title="Dashboard | Settings"
        description="View and manage account information."
      />

      <TopContain />

      <section className={`${styles.accountSection}`}>
        <div className={styles.acctInfo}>
          <div className={styles.topText}>
            <h2>Account Settings</h2>
            <p>Update your photo and personal details here</p>
          </div>

          <div className={styles.acctForm}>
            <Form
              initialValues={formValues}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <InputGroup
                className={`group`}
                name={`fullname`}
                label="Full Name"
                placeholder={`Your full name here`}
              />

              <div className={`flex`}>
                <InputGroup className={`group`} label="Phone" />

                <InputGroup className={`group`} label="Email" />
              </div>

              <div className={`flex`}>
                <InputGroup
                  className={`group`}
                  label="Date of Birth"
                  name={`date`}
                  type={`date`}
                />

                <SelectGroup
                  className={`group`}
                  name="country"
                  label="Country"
                  options={[`Nigeria`]}
                />
              </div>

              <TextAreaGroup label="Update Bio" name="bio" />

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
              <Link href={`/admin/settings/security`}>
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

export default Profile;
