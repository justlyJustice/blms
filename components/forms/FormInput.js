import { useFormikContext } from "formik";
import styled from "styled-components";

const Input = styled.input`
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
  font-family: Roboto;
  padding: 10px 20px;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const FormInput = ({ name, placeholder, type, ...props }) => {
  const { values, errors, setFieldValue } = useFormikContext();

  return (
    <Input
      type={type ? type : "text"}
      name={name}
      value={values[name]}
      onChange={(e) => setFieldValue(name, e.target.value)}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default FormInput;
