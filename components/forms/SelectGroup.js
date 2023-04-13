import PropTypes from "prop-types";
import styled from "styled-components";

import FormSelect from "./Select";

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

const SelectGroup = ({ name, options, label, ...props }) => {
  return (
    <Group {...props}>
      <label htmlFor={name}>{label}</label>

      <FormSelect name={name} id={name} options={options} />
    </Group>
  );
};

SelectGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
};

export default SelectGroup;
