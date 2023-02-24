import { useState } from "react";
import * as Yup from "yup";
import Head from "@/components/Head";
import Image from "next/image";

import { SubmitButton, Form, InputGroup } from "@/components/forms";
import { registrationFields } from "@/data/forms";

import { logo, registerIllustration } from "@/public/assets";
import styles from "@/styles/Forms.module.css";
import Link from "next/link";

const validationSchema = Yup.object().shape({
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required()
    .label("Confirm Password"),
  email: Yup.string().email().required().label(`Email`),
  firstName: Yup.string().required().label(`First Name`),
  lastName: Yup.string().required().label(`Last Name`),
  phone: Yup.string().required().label(`Phone Number`),
  password: Yup.string().required().label(`Password`),
});

const Register = () => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const handleSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values));

    resetForm();
  };

  return (
    <>
      <Head
        title="BLMS - Register"
        description="Create an account to continue to BLMS"
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
            <h3>Create your BLMS</h3>

            <p>account to continue</p>
          </div>

          <hr />

          <Form
            initialValues={{
              confirmPassword: ``,
              email: ``,
              firstName: ``,
              lastName: ``,
              phone: ``,
              password: ``,
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <div className={styles.form}>
              {registrationFields.map(
                ({ id, label, name, placeholder, type }) => (
                  <div className={styles.groupContain} key={id}>
                    <InputGroup
                      label={label}
                      name={name}
                      placeholder={placeholder}
                      type={type}
                    />
                  </div>
                )
              )}
            </div>

            <div className={`${styles.confirmation} flex my-5`}>
              <input type="checkbox" name="" id="" />

              <p>
                I accept the <span>Terms & Conditions</span>
              </p>
            </div>

            <div className={`flex my-5 ${styles.links}`}>
              <Link href={`/auth/login`}>Already have an account? Login</Link>

              <SubmitButton
                alfaSlab
                background={`brown`}
                radius={`20px`}
                width="25%"
              >
                Register
              </SubmitButton>
            </div>
          </Form>
        </div>

        <div className={styles.illustration}>
          <Image src={registerIllustration} alt={`illustration`} />
        </div>
      </section>
    </>
  );
};

export default Register;
