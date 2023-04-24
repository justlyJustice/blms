import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Layout from "@/components/dashboard/admin/Layout";
import Head from "@/components/Head";
import Modal from "@/components/dashboard/admin/modals";
import TopContain from "@/components/dashboard/admin/TopContain";

import { avatar } from "@/public/assets";

import styles from "@/styles/admin/Dashboard.module.css";

const TwoFactorAuthentication = () => {
  const ref = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const reader = FileList();

  const handleSelectImage = () => {
    ref.current?.click();
  };

  const handleImageChange = (e) => {
    setSelectedImage(reader.readAsDataURL(e.target.files[0]));
  };

  return (
    <Layout>
      <Head
        title="Settings | Two factor authentication"
        description="Set up a two factor authentication to help solidify your account security."
      />

      <TopContain />

      <Modal isModalOpen={isModalOpen} setisModalOpen={setIsModalOpen} />

      <section className={`${styles.accountSection}`}>
        <div className={styles.acctInfo}>
          <div className={styles.topText}>
            <h2>Two Factor-Authentication (2FA)</h2>
            <p>
              Set up a two factor authentication to help solidify your account
              security.
            </p>
          </div>

          <div className={`${styles.securityOptions}`}>
            <div className={styles.optionsContain}>
              <div className="px-10">
                <h4>SELECT A SECURITY METHOD</h4>
                <hr />
              </div>

              <div
                className={`flex justify-space-between  ${styles.singleOption}`}
              >
                <div className="flex">
                  <i className="bx bx-message-alt-check mx-5"></i>

                  <div>
                    <p className={styles.optionTitle}>Text Message (SMS)</p>
                    <p className={styles.optionDesc}>
                      Use text messages (SMS) to receive verification codes. For
                      your protection, phone numbers used for two-factor
                      authentication can't be used to reset your password when
                      two-factor authentication is on.
                    </p>
                  </div>
                </div>

                <div>
                  <Link
                    className={`${styles.editBtn}`}
                    href={`#`}
                    onClick={() => setIsModalOpen(true)}
                  >
                    Activate
                  </Link>
                </div>
              </div>

              <div
                className={`flex justify-space-between  ${styles.singleOption}`}
              >
                <div className="flex">
                  <i className="bx bx-message-alt-check mx-5"></i>

                  <div>
                    <p className={styles.optionTitle}>Authentication App</p>
                    <p className={styles.optionDesc}>
                      Use the authentication app to receive verification codes.
                      For your protection, phone numbers used for two-factor
                      authentication can't be used to reset your password when
                      two-factor authentication is on.
                    </p>
                  </div>
                </div>

                <div>
                  <Link className={`txt-disabled ${styles.editBtn}`} href={`#`}>
                    Activate
                  </Link>
                </div>
              </div>
            </div>
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
              onClick={() => handleSelectImage()}
            />

            <input
              type="file"
              accept="*/jpg"
              style={{ display: "none" }}
              onChange={handleImageChange}
              ref={ref}
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

export default TwoFactorAuthentication;
