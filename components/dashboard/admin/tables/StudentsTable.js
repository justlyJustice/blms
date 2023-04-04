import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { avatar } from "@/public/assets";
import Pagination from "@/components/Pagination";

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 5em;
  width: 100%;

  thead {
    text-align: left;
  }

  tbody tr:nth-child(odd) {
    background: rgba(247, 247, 247, 0.6);
  }

  tbody tr:nth-child(even) {
    background: var(--white);
  }

  tbody tr td {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    padding: 10px 4px;
  }

  tbody .checkbox {
    border: 2px solid red;
    margin-right: 10px;
  }

  tbody .checkbox:checked::before {
    color: red;
    background-color: red;
  }

  tbody .avatar {
    border-radius: 20px;
    height: 30px;
    margin-right: 10px;
    object-fit: cover;
    width: 30px;
  }

  tbody .link {
    color: #e38a04;
  }
`;

const students = [
  {
    id: Math.round((Math.random() / 10) * 40 * 20),
    name: "Joshua Moses P.",
    grade: "SS2",
    age: 14,
    gender: "Male",
  },
  {
    id: Math.round((Math.random() / 10) * 40 * 20),
    name: "Moses Abraham",
    grade: "SS2",
    age: 11,
    gender: "Male",
  },
  {
    id: Math.round((Math.random() / 10) * 40 * 20),
    name: "Faith Friday",
    grade: "SS2",
    age: 19,
    gender: "Female",
  },
  {
    id: Math.round((Math.random() / 10) * 40 * 20),
    name: "Joshua Moses P.",
    grade: "SS2",
    age: 14,
    gender: "Male",
  },
  {
    id: Math.round((Math.random() / 10) * 40 * 20),
    name: "Joshua Moses P.",
    grade: "SS2",
    age: 14,
    gender: "Male",
  },
  {
    id: Math.round((Math.random() / 10) * 40 * 20),
    name: "Joshua Moses P.",
    grade: "SS2",
    age: 14,
    gender: "Male",
  },
];

const StudentsTable = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Student’s Name</th>
          <th>ID</th>
          <th>Class</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td className={`flex`} aria-rowcount={4}>
              <input className="checkbox" type="checkbox" />

              <div className="flex">
                <Image alt="avatar" className="avatar" src={avatar} />

                <div>
                  <p>{student.name}</p>
                </div>
              </div>
            </td>

            <td>
              <p>ID: {student.id}</p>
            </td>

            <td>
              <p>{student.grade}</p>
            </td>

            <td>
              <p>{student.age}</p>
            </td>

            <td>
              <p>{student.gender}</p>
            </td>

            <td>
              <Link className="link" href={`#`}>
                View Profile
              </Link>
            </td>
          </tr>
        ))}
      </tbody>

      <Pagination />
    </Table>
  );
};

export default StudentsTable;
