import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Head from "@/components/Head";
import {
  Form,
  SelectGroup,
  InputGroup,
  SubmitButton,
  TextAreaGroup,
} from "@/components/forms";

import styles from "@/styles/admin/Dashboard.module.css";

const Settings = ({ tab }) => {
  const formValues = {
    fullname: "Ella Dandison",
    phoneno: ``,
    date: ``,
    email: ``,
    dob: ``,
    country: ``,
    bio: ``,
  };

  return (
    <>
      <Head
        title="Dashboard | Settings"
        description="View and manage account information."
      />

      <div className={styles.acctInfo}>
        <div className={styles.topText}>
          <h2>Account Settings</h2>
          <p>Update your photo and personal details here</p>
        </div>

        <div className={styles.acctForm}>
          <Form
            initialValues={formValues}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <InputGroup
              className={`group`}
              name={`fullname`}
              label="Full Name"
              placeholder={`Your full name here`}
            />

            <div className={`flex`}>
              <InputGroup className={`group`} label="Phone" />

              <InputGroup className={`group`} label="Email" />
            </div>

            <div className={`flex`}>
              <InputGroup
                className={`group`}
                label="Date of Birth"
                name={`date`}
                type={`date`}
              />

              <SelectGroup
                className={`group`}
                name="country"
                label="Country"
                options={[`Nigeria`]}
              />
            </div>

            <TextAreaGroup label="Update Bio" name="bio" />

            <div className={`flex ${styles.btns}`}>
              <Button>Cancel</Button>

              <SubmitButton background={`purple`}>Save</SubmitButton>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Settings;
