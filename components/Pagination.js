import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 10px 0;

  i {
    font-size: 30px;
    color: var(--dark);
    cursor: pointer;
  }

  .items span {
    background-color: var(--dark-purple);
    border-radius: 5px;
    color: var(--white);
    cursor: pointer;
    margin: 0px 4px;
    text-align: center;
    width: 24px;
  }
`;

const Pagination = () => {
  return (
    <Container>
      <i className="bx bx-chevron-left"></i>

      <div className="flex items">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <i className="bx bx-chevron-right"></i>
    </Container>
  );
};

export default Pagination;
