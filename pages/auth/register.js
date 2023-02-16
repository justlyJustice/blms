import Head from "@/components/Head";
import { logo } from "@/public/assets";
import styles from "@/styles/Register.module.css";

const Register = () => {
  return (
    <>
      <Head
        title="BLMS - Register"
        description="Create an account to continue to BLMS"
        image={logo}
      />
      <section className="flex">
        <h2>Register</h2>
      </section>
    </>
  );
};

export default Register;
