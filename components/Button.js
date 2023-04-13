import styled from "styled-components";

import colors from "@/utils/colors";

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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Button = ({ children, onClick, ...props }) => {
  return (
    <Btn {...props} onClick={onClick} type="submit" {...props}>
      {children}
    </Btn>
  );
};

export default Button;
