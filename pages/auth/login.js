import * as Yup from "yup";
import Head from "@/components/Head";
import Image from "next/image";
import Link from "next/link";

import { SubmitButton, Form, InputGroup } from "@/components/forms";
import { loginFields } from "@/data/forms";

import { logo, loginIllustration } from "@/public/assets";
import styles from "@/styles/Forms.module.css";

import useSubmit from "@/hooks/useSubmit";
import { loginUser } from "@/services/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label(`Email`),
  password: Yup.string().required().min(6).label(`Password`),
});

const Login = () => {
  const { submit, submitting } = useSubmit(loginUser);
  const handleSubmit = (values, { resetForm }) => {
    submit(values);
  };

  return (
    <>
      <Head
        title="BLMS - Login"
        description="Sign in to continue to BLMS"
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
            <h3>Sign In To</h3>

            <p>continue to BLMS</p>
          </div>

          <hr />

          <Form
            initialValues={{
              email: ``,
              password: ``,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className={styles.form}>
              {loginFields.map(({ id, label, name, placeholder, type }) => (
                <div className={styles.groupContain} key={id}>
                  <InputGroup
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                  />
                </div>
              ))}
            </div>

            <div className={`${styles.reset} flex my-5`}>
              <h5 className={styles.resetPassText}>
                Lost your password?{" "}
                <Link className={styles.resetPassLink} href={`/reset-password`}>
                  Reset it here
                </Link>
              </h5>
            </div>

            <div className={`flex my-5 ${styles.links}`}>
              <SubmitButton
                alfaSlab
                background={`primary`}
                disabled={submitting}
                radius={`20px`}
                width="25%"
              >
                {submitting ? (
                  <i className="bx bx-loader-circle bx-spin txt-17"></i>
                ) : (
                  `Login`
                )}
              </SubmitButton>
            </div>
          </Form>
        </div>

        <div className={styles.illustration}>
          <Image src={loginIllustration} alt={`illustration`} />
        </div>
      </section>
    </>
  );
};

export default Login;
