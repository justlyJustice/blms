import * as PropTypes from "prop-types";
import { useFormikContext } from "formik";
import styled from "styled-components";

import FormError from "./FormError";

const Select = styled.select`
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
  font-family: Roboto;
  padding: 10px 20px;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const FormSelect = ({ name, options, placeholder, ...props }) => {
  const { values, errors, setFieldValue } = useFormikContext();

  return (
    <>
      <Select
        name={name}
        onChange={(e) => setFieldValue(name, e.target.value)}
        placeholder={placeholder}
        value={values[name]}
        style={{ border: errors[name] && `1px solid var(--danger)` }}
        {...props}
      >
        <option value="">Select value...</option>

        {options.map((opt, i) => (
          <option value={i}>{opt}</option>
        ))}
      </Select>

      <FormError error={errors[name]} />
    </>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
};

export default FormSelect;
