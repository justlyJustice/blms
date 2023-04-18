import { motion } from "framer-motion";
import styled from "styled-components";

import Button from "@/components/Button";
import { Form, InputGroup } from "@/components/forms";

const ModalBg = styled.div`
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;

  .modal-body {
    background: var(--white);
    box-shadow: 0px 1.09px 3.27px 1.09px rgba(0, 0, 0, 0.15),
      0px 1.09px 2.18px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 25px;
    width: 400px;
  }

  label,
  input {
    font-family: Poppins !important;
  }

  hr {
    border: 1.09px solid rgba(0, 0, 0, 0.5);
    width: 100%;
  }

  .btn {
    font-weight: 500;
    font-size: 15.26px;
    line-height: 23px;
    margin: 10px 0;
    width: 100%;
  }
`;

const SmsVerificationModal = () => {
  return (
    <ModalBg className="flex justify-space-center font-poppins">
      <motion.div
        animate={{ opacity: 1, translateY: 100 }}
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
    </ModalBg>
  );
};

export default SmsVerificationModal;
