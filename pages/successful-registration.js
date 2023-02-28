import { useEffect, useState } from "react";

import Head from "@/components/Head";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactConfetti from "react-confetti";

import { logo, resetPassIllustration } from "@/public/assets";
import styles from "@/styles/Forms.module.css";
import Button from "@/components/Button";

const SuccessfulRegistration = () => {
  const router = useRouter();
  const [browserWindow, setBrowserWindow] = useState();

  useEffect(() => {
    setBrowserWindow(window);
  }, []);

  useEffect(() => {
    if (browserWindow) {
      console.log(browserWindow);
    }
  }, [browserWindow]);

  return (
    <>
      <Head
        title="BLMS - Registration Successful"
        description="Click on the button below to continue to your dashboard."
        image="/assets/logo.png"
      />

      <ReactConfetti
        height={browserWindow?.screen.availHeight}
        width={browserWindow?.screen.availWidth}
      />

      <section className={styles.wrapper}>
        <div className={styles.formContain}>
          <div className={`${styles.header} flex`}>
            <Image src={logo} alt={`logo`} />

            <div>
              <h4>E-Learning Management System for all schools</h4>
            </div>
          </div>

          <div className={styles.textContain}>
            <h3>Registration Successful</h3>

            <h5 className={styles.resetText}>
              Click on the button below to continue to your dashboard.
            </h5>
          </div>

          <Button
            onClick={() => router.replace(`/dashboard/student`)}
            alfaSlab
            background={`primary`}
            radius={`20px`}
            width="25%"
          >
            Continue
          </Button>
        </div>

        <div className={styles.illustration}>
          <Image src={resetPassIllustration} alt={`illustration`} />
        </div>
      </section>
    </>
  );
};

export default SuccessfulRegistration;
