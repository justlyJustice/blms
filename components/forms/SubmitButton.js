import { useFormikContext } from "formik";
import styled from "styled-components";

const colors = {
  brown: "#e38a04",
  dark: "#1e1e1e",
  primary: "#b51aae",
  purple: "#320839",
  white: "#ffffff",
};

const Btn = styled.button`
  background-color: ${(props) =>
    props.background ? colors[props.background] : "var(--primary)"};
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
  color: ${(props) => (props.color ? colors[props.color] : `white`)};
  cursor: pointer;
  font-family: ${(props) => (props.alfaSlab ? `Alfa Slab One` : `Roboto`)};
  padding: 10px 20px;
  transition: ease-in-out all 0.5s;
  width: ${(props) => (props.width ? props.width : "100%")};

  /* &:hover {
    transform: translateX(4px);
  } */

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SubmitButton = ({ children, ...props }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Btn {...props} type="submit" onClick={handleSubmit} {...props}>
      {children}
    </Btn>
  );
};

export default SubmitButton;
