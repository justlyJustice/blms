import * as PropTypes from "prop-types";
import { useFormikContext } from "formik";
import styled from "styled-components";

import FormError from "./FormError";

const Input = styled.input`
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
  font-family: Roboto;
  padding: 10px 20px;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const Icon = styled.i`
  color: var(--danger);
  left: 90%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -100%);
  transition: ease-in-out all 0.3s;
`;

const FormInput = ({ name, placeholder, type, ...props }) => {
  const { values, errors, setFieldValue } = useFormikContext();

  return (
    <>
      <Input
        name={name}
        onChange={(e) => setFieldValue(name, e.target.value)}
        placeholder={placeholder}
        type={type ? type : "text"}
        value={values[name]}
        style={{ border: errors[name] && `1px solid var(--danger)` }}
        {...props}
      />

      <FormError error={errors[name]} />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
