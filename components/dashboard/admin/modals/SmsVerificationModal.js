import { motion } from "framer-motion";

import Button from "@/components/Button";
import { Form, InputGroup } from "@/components/forms";

import { modalAnimate, modalInitial } from "@/utils/variants";

const SmsVerificationModal = () => {
  return (
    <motion.div
      initial="modalInitial"
      animate="modalAnimate"
      variants={{
        modalAnimate,
        modalInitial,
      }}
      className="modal-body flex justify-space-center flex-column"
    >
      <div className="align-self-start my-10 w-100">
        <p>PHONE NUMBER VERIFICATION</p>
        <hr />
      </div>

      <div className="w-100 font-poppins">
        <Form initialValues={{ name: `` }}>
          <InputGroup name={`phone`} label={`Phone Number`} />
          <InputGroup name={`phone`} label={`Confirm Phone Number`} />
        </Form>
      </div>

      <Button background="purple" className="btn font-poppins">
        Continue
      </Button>
    </motion.div>
  );
};

export default SmsVerificationModal;
