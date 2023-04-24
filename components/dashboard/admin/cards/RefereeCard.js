import styled from "styled-components";

import { kidCoverImage } from "@/public/assets";

const Card = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  height: 300px;
  width: 300px;

  .cover {
    height: 74px;
    background-image: url(${kidCoverImage.src});
  }

  .cover img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

console.log(kidCoverImage);

const RefereeCard = () => {
  return (
    <Card>
      <div className="cover">
        <div></div>
      </div>
    </Card>
  );
};

export default RefereeCard;
