import Link from "next/link";

import styled from "styled-components";

const Card = styled(Link)`
  align-items: center;
  display: flex;
  background-color: #f7e6ff;
  border-radius: 5px;
  flex-direction: column;
  height: 130px;
  justify-content: center;
  margin-left: 15px;
  padding: 10px 44px;
  width: 140px;

  i {
    color: #ddc4e9;
    font-size: 40px;
    margin: 4px auto;
  }

  p {
    color: rgba(50, 8, 57, 0.87);
    font-family: Roboto;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
    /* width: 140px; */
  }

  @media screen and (max-width: 768px) {
    height: 100%;
    margin: 10px 0;
    padding: 30px;
    width: 100%;
  }
`;

const TestCard = ({ icon, subjectId = `#`, text }) => {
  return (
    <Card href={subjectId}>
      <i className={`bx ${icon}`}></i>

      <p>{text}</p>
    </Card>
  );
};

export default TestCard;
