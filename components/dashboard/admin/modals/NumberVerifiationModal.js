import { motion } from "framer-motion";

import Button from "@/components/Button";
import { Form, InputGroup } from "@/components/forms";

import { modalAnimate, modalInitial } from "@/utils/variants";

const NumberVerifiationModal = () => {
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
        <span>
          We’ve just sent you a One-Time Password. Please check your message and
          type in the code.
        </span>

        <div className="my-10">
          <Form initialValues={{ otp: `` }}>
            <InputGroup name={`opt`} label={`Input OTP`} />
          </Form>
        </div>
      </div>

      <Button background="purple" className="btn font-poppins">
        Confirm
      </Button>
    </motion.div>
  );
};

export default NumberVerifiationModal;
