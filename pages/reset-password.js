import * as Yup from "yup";
import Head from "@/components/Head";
import Image from "next/image";
import Link from "next/link";

import { SubmitButton, Form, InputGroup } from "@/components/forms";
import { resetFields } from "@/data/forms";

import { logo, resetPassIllustration } from "@/public/assets";
import styles from "@/styles/Forms.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label(`Email`),
});

const ResetPassword = () => {
  const handleSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values));

    resetForm();
  };

  return (
    <>
      <Head
        title="BLMS - Reset Password"
        description="Forgot Password? Enter your email and we will send you 
        and instruction on how to reset your password."
        image="/assets/logo.png"
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
            <h3>Forgot Password?</h3>

            <h5 className={styles.resetText}>
              Enter your email and we will send you <br /> and instruction on
              how to reset your password.
            </h5>
          </div>

          <hr />

          <Form
            initialValues={{
              email: ``,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className={styles.form}>
              {resetFields.map(({ id, label, name, placeholder, type }) => (
                <InputGroup
                  label={label}
                  name={name}
                  key={id}
                  placeholder={placeholder}
                  type={type}
                  groupWidth={`48%`}
                />
              ))}
            </div>

            <div className={`${styles.reset} flex my-5`}>
              <h5 className={styles.resetPassText}>
                <Link className={styles.resetPassLink} href={`/auth/login`}>
                  Login
                </Link>
              </h5>
            </div>

            <div className={`flex my-5 ${styles.links}`}>
              <SubmitButton
                alfaSlab
                background={`primary`}
                radius={`20px`}
                width="25%"
              >
                Continue
              </SubmitButton>
            </div>
          </Form>
        </div>

        <div className={styles.illustration}>
          <Image src={resetPassIllustration} alt={`illustration`} />
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
