import Head from "@/components/Head";
import { logo, registerIllustration } from "@/public/assets";
import styles from "@/styles/Register.module.css";
import Image from "next/image";

const Register = () => {
  return (
    <>
      <Head
        title="BLMS - Register"
        description="Create an account to continue to BLMS"
        image="/assets/logo.png"
      />

      <section className={styles.registerContain}>
        <div className={styles.formContain}>
          <div className="flex">
            <Image src={logo} alt={`illustration`} />

            <div>
              <h4>E-Learning Management System for all schools</h4>
            </div>
          </div>

          <div className={styles.textContain}>
            <h3>Create your BLMS</h3>
            <p>account to continue</p>
          </div>

          <hr />
        </div>

        <div className={styles.illustration}>
          <Image src={registerIllustration} alt={`illustration`} />
        </div>
      </section>
    </>
  );
};

export default Register;
