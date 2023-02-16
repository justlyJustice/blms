import { useFormikContext } from "formik";
import styled from "styled-components";

const colors = {
  primary: "#e38a04",
  dark: "#1e1e1e",
  white: "#ffffff",
  purple: "#320839",
};

const Btn = styled.button`
  color: ${(props) => (props.color ? colors[props.color] : `white`)};
  background-color: ${(props) =>
    props.background ? colors[props.background] : "var(--primary)"};
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
  font-family: Roboto;
  padding: 10px 20px;
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const FormInput = ({ children, ...props }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Btn {...props} type="submit" onClick={handleSubmit} {...props}>
      {children}
    </Btn>
  );
};

export default FormInput;
