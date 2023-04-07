import * as PropTypes from "prop-types";
import { useFormikContext } from "formik";
import styled from "styled-components";

import FormError from "./FormError";

const TextArea = styled.textarea`
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
  font-family: Roboto;
  padding: 10px 20px;
  width: ${(props) => (props.width ? props.width : "100%")};
  resize: none;
`;

const FormTextArea = ({ name, placeholder, type, ...props }) => {
  const { values, errors, setFieldValue } = useFormikContext();

  return (
    <>
      <TextArea
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

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormTextArea;
