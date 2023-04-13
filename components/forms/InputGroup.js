import PropTypes from "prop-types";
import styled from "styled-components";

import { Input } from ".";

const Group = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: ${(props) => (props.row ? `row` : `column`)};
  margin: 4px 0;
  width: ${(props) => (props.groupWidth ? props.groupWidth : "100%")};

  input {
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  label {
    color: rgba(50, 8, 57, 0.87);
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const InputGroup = ({ name, label, placeholder, type, ...props }) => (
  <Group {...props}>
    <label htmlFor={name}>{label}</label>

    <Input name={name} id={name} placeholder={placeholder} type={type} />
  </Group>
);

InputGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default InputGroup;
