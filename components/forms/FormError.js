import styled from "styled-components";

const Text = styled.small`
  color: var(--danger);
  font-family: Roboto;
  font-size: 12px;
  margin-top: 4px;
`;

const FormError = ({ error }) => {
  if (!error) return null;

  return <Text>{error}</Text>;
};

export default FormError;
