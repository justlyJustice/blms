import styles from "@/styles/Home.module.css";
import { Button, Form, Input } from "./forms";

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
            placeholder="Your email address e.g. address@blms.edu.ng"
          />

          <Button>Subscribe Now</Button>

          {/*  <button type="submit">Subscribe Now</button> */}
        </Form>
      </div>
    </section>
  );
};

export default UpdateSection;
