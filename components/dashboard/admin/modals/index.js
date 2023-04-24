import { useRef } from "react";
import styled from "styled-components";

import NumberVerifiationModal from "./NumberVerifiationModal";
import SmsVerificationModal from "./SmsVerificationModal";

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

  span {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: justify;
  }

  .btn {
    font-weight: 500;
    font-size: 15.26px;
    line-height: 23px;
    margin: 10px 0;
    width: 100%;
  }
`;

const Modal = ({ isModalOpen, setisModalOpen }) => {
  const ref = useRef();

  if (!isModalOpen) return null;

  const closeModal = (e) => {
    if (ref.current === e.target) {
      setisModalOpen(false);
    }
  };

  return (
    <ModalBg
      className="flex justify-space-center font-poppins"
      ref={ref}
      onClick={closeModal}
    >
      <NumberVerifiationModal />
    </ModalBg>
  );
};

export default Modal;
