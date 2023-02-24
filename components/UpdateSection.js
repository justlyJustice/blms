import styles from "@/styles/Home.module.css";
import { SubmitButton, Form, Input } from "./forms";

const UpdateSection = () => {
  return (
    <section className={`flex ${styles.updateSection}`}>
      <div>
        <h1>
          Let’s keep <br />
          <span> you updated</span>
        </h1>
      </div>

      <div>
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
          initialValues={{ email: "" }}
        >
          <Input
            width="100%"
            name={`email`}
            placeholder="Your email address e.g. address@blms.edu.ng"
          />

          <SubmitButton>Subscribe Now</SubmitButton>

          {/*  <button type="submit">Subscribe Now</button> */}
        </Form>
      </div>
    </section>
  );
};

export default UpdateSection;
