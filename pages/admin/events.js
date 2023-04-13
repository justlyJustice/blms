import Button from "@/components/Button";
import Head from "@/components/Head";
import Layout from "@/components/dashboard/admin/Layout";
import TopContain from "@/components/dashboard/admin/TopContain";

import styles from "@/styles/admin/Dashboard.module.css";
import { logo } from "@/public/assets";
import EventCard from "@/components/dashboard/admin/cards/EventCard";

const events = [
  {
    id: 0,
    isPublished: true,
    title: "School Graduation Ceremony",
    image:
      "https://img.freepik.com/free-photo/young-afro-american-female-student-dressed-black-graduation-gown-campus-as-background_1157-50434.jpg?w=740&t=st=1681400591~exp=1681401191~hmac=78261813b4741978b7a6fc63bd884d5c824299039ba4f03827d069115eac3498",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis nisl amet tempor in dolor senectus tempus elit habitant",
  },
  {
    id: 1,
    isPublished: false,
    title: "School Graduation Ceremony",
    image:
      "https://img.freepik.com/free-photo/upset-tired-studying-african-student-woman-future-graduate-laying-books-thinking-about-profession-diploma-sitting-copy-space_176420-14347.jpg?w=740&t=st=1681400627~exp=1681401227~hmac=d9640adcdb1f49c3b8477a352eabed6027583d1fd58c787971e5a8805f9ba103",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis nisl amet tempor in dolor senectus tempus elit habitant",
  },
  {
    id: 2,
    isPublished: true,
    title: "School Graduation Ceremony",
    image:
      "https://img.freepik.com/free-photo/upset-tired-studying-african-student-woman-future-graduate-laying-books-thinking-about-profession-diploma-sitting-copy-space_176420-14347.jpg?w=740&t=st=1681400627~exp=1681401227~hmac=d9640adcdb1f49c3b8477a352eabed6027583d1fd58c787971e5a8805f9ba103",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis nisl amet tempor in dolor senectus tempus elit habitant",
  },
  {
    id: 3,
    isPublished: false,
    title: "School Graduation Ceremony",
    image:
      "https://img.freepik.com/premium-photo/schoolboy-mortar-board-holding-certificate-showing-thumbs-up-classroom_107420-35934.jpg?w=740",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis nisl amet tempor in dolor senectus tempus elit habitant",
  },
  {
    id: 5,
    isPublished: true,
    title: "School Graduation Ceremony",
    image:
      "https://img.freepik.com/premium-photo/schoolboy-mortar-board-holding-certificate-showing-thumbs-up-classroom_107420-35934.jpg?w=740",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis nisl amet tempor in dolor senectus tempus elit habitant",
  },
  {
    id: 6,
    isPublished: false,
    title: "School Graduation Ceremony",
    image:
      "https://img.freepik.com/free-photo/upset-tired-studying-african-student-woman-future-graduate-laying-books-thinking-about-profession-diploma-sitting-copy-space_176420-14347.jpg?w=740&t=st=1681400627~exp=1681401227~hmac=d9640adcdb1f49c3b8477a352eabed6027583d1fd58c787971e5a8805f9ba103",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis nisl amet tempor in dolor senectus tempus elit habitant",
  },
];

const Events = () => {
  return (
    <Layout>
      <Head
        title="Dashboard | Events"
        description="View/add school ongoing and coming events"
        image={logo}
      />

      <TopContain />

      <section className={`${styles.eventsContain}`}>
        <div className={`flex justify-space-between .mx-10`}>
          <h2>Events</h2>

          <div className={`flex ${styles.actions}`}>
            <div className={`flex`}>
              <p className="flex">
                <i className="bx bx-filter"></i> Filter
              </p>

              <p className="flex">
                <i className="bx bx-sort"></i>Sort
              </p>
            </div>

            <Button className={styles.addEvent}>+ New Event</Button>
          </div>
        </div>

        <div className={`flex justify-space-between ${styles.allEvents}`}>
          {events.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
