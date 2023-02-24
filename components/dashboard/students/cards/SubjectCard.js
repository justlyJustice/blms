import Link from "next/link";

import styled from "styled-components";

const Card = styled(Link)`
  align-items: center;
  display: flex;
  background-color: var(--dark-purple);
  box-shadow: 0px 10px 20px rgba(72, 72, 72, 0.25);
  border-radius: 5px;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  margin: 8px auto;
  padding: 40px;
  width: 170px;

  i {
    color: var(--white);
    font-size: 40px;
    margin: 4px auto;
  }

  h3 {
    color: var(--white);
    font-family: "Alfa Slab One";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    width: 140px;
  }
`;

const SubjectCard = ({ icon, subjectId = `#`, text }) => {
  return (
    <Card href={`/John/subjects/${subjectId}`}>
      <i className={`bx ${icon}`}></i>

      <h3>{text}</h3>
    </Card>
  );
};

export default SubjectCard;
