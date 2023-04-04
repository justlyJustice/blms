import Image from "next/image";

import { avatar } from "@/public/assets";
import styles from "@/styles/admin/Dashboard.module.css";
import Pagination from "@/components/Pagination";

const InstructorsTable = ({ instructors }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Instructor’s Names</th>
          <th>Contact</th>
          <th>Subject</th>
          <th>Date Added</th>
        </tr>
      </thead>

      <tbody>
        {instructors.map((instructor) => (
          <tr key={instructor.name}>
            <td className={`flex`}>
              <Image className={styles.instructorAvatar} src={avatar} />

              <div className={styles.nameContain}>
                <h4>{instructor.name}</h4>

                <div className={`flex ${styles.label}`}>
                  <span>Active</span>

                  <span>Instructor</span>
                </div>
              </div>
            </td>

            <td>
              <div className={styles.contactInfo}>
                <p>
                  <i className="bx bx-envelope"></i>
                  {instructor.contact.email}
                </p>

                <p>
                  <i className="bx bx-phone"></i> {instructor.contact.phone}
                </p>
              </div>
            </td>

            <td>
              <div>
                <p>{instructor.subject} Teacher</p>
              </div>
            </td>

            <td>
              <p>March 17, 2022</p>
            </td>
          </tr>
        ))}
      </tbody>

      <Pagination />
    </table>
  );
};

export default InstructorsTable;
