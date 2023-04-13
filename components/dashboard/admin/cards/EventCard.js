import Image from "next/image";
import styled from "styled-components";

import Button from "@/components/Button";

const EventItem = styled.div`
  background: #f9f9f9;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  font-family: Poppins !important;
  margin: 10px 0;
  width: 32%;

  button {
    border-radius: 5px;
    font-family: Alfa Slab One;
    margin: 5px 0;
  }

  .published-info {
    padding: 20px;
  }

  .published-info .published {
    background: rgba(50, 8, 57, 0.2);
    border-radius: 5px;
    font-size: 12px;
    width: fit-content;
    padding: 4px 5px;

    i {
      color: var(--dark-purple);
      margin-right: 2px;
    }

    p {
      color: var(--dark-purple);
      line-height: 18px;
    }
  }

  .published-info .draft {
    background: rgba(213, 213, 213, 0.8);
    border-radius: 5px;
    font-size: 12px;
    padding: 4px 5px;
    width: fit-content;

    i {
      color: #7d7d7d;
      margin-right: 2px;
    }

    p {
      color: #7d7d7d;
      line-height: 18px;
    }
  }

  .img-contain {
    height: 100px;
    position: relative;

    .event-img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  /* Text info */
  .text-contain {
    padding: 20px;

    h3 {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-align: justify;
    }

    .draft-btn {
      background: #dcdcdc;
      color: black;
    }
  }
`;

const EventCard = ({ event }) => {
  return (
    <EventItem>
      <div className="published-info">
        {event.isPublished ? (
          <div className="flex published">
            <i className="bx bx-globe"></i> <p>Published</p>
          </div>
        ) : (
          <div className="flex draft">
            <i class="bx bxs-edit"></i> <p>Draft</p>
          </div>
        )}
      </div>

      <div className="img-contain">
        <Image alt="event-img" className="event-img" fill src={event.image} />
      </div>

      <div className="text-contain">
        <h3>{event.title}</h3>

        <p>{event.description}</p>

        {event.isPublished ? (
          <Button background="purple">View Event</Button>
        ) : (
          <Button className="draft-btn">Continue Editing</Button>
        )}
      </div>
    </EventItem>
  );
};

export default EventCard;
