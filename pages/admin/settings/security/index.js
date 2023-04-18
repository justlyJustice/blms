import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Head from "@/components/Head";
import Layout from "@/components/dashboard/admin/Layout";

import TopContain from "@/components/dashboard/admin/TopContain";

import { avatar } from "@/public/assets";
import styles from "@/styles/admin/Dashboard.module.css";

const Security = () => {
  return (
    <Layout>
      <Head
        title="Dashboard | Security & Login"
        description="View and manage account information."
      />

      <TopContain />

      <section className={`${styles.accountSection}`}>
        <div className={styles.acctInfo}>
          <div className={styles.topText}>
            <h2>Security & Login</h2>
            <p>Update your security details and make your account safe.</p>
          </div>

          <div className={`${styles.securityOptions}`}>
            <div className={styles.optionsContain}>
              <div className="px-10">
                <h4>LOGIN</h4>
                <hr />
              </div>

              <div
                className={`flex justify-space-between  ${styles.singleOption}`}
              >
                <div className="flex">
                  <i className="bx bxs-key mx-5"></i>

                  <div>
                    <p className={styles.optionTitle}>Change Password</p>
                    <p className={styles.optionDesc}>
                      It’s a good idea to use a password that you don’t use
                      elsewhere
                    </p>
                  </div>
                </div>

                <div>
                  <Link
                    className={styles.editBtn}
                    href={`/admin/settings/security/reset-password`}
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.optionsContain}>
              <div className="px-10">
                <h4>TWO FACTOR AUTHENTICATION</h4>
                <hr />
              </div>

              <div
                className={`flex justify-space-between  ${styles.singleOption}`}
              >
                <div className="flex">
                  <i className="bx bx-check-shield mx-5"></i>

                  <div>
                    <p className={styles.optionTitle}>
                      Use Two-Factor Authentication
                    </p>

                    <p className={styles.optionDesc}>
                      We’ll ask for a login code if we notice an attempted login
                      from an unrecognized device
                    </p>
                  </div>
                </div>

                <div>
                  <Link
                    className={styles.editBtn}
                    href={`/admin/settings/security/2fa-authentication`}
                  >
                    Edit
                  </Link>
                </div>
              </div>

              <div
                className={`flex justify-space-between  ${styles.singleOption}`}
              >
                <div className="flex">
                  <i className="bx bx-devices mx-5"></i>

                  <div>
                    <p className={styles.optionTitle}>Authorized Logins</p>
                    <p className={styles.optionDesc}>
                      Review a list of device on which you don’t need too use a
                      login code.
                    </p>
                  </div>
                </div>

                <div>
                  <Link className={styles.editBtn} href={`#`}>
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-space-between mt-35 ${styles.btns}`}>
            <Button>Cancel</Button>
            <Button background={`purple`}>Save</Button>
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
                <i className="bx bx-user-circle"></i>
                Account Information
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

export default Security;
