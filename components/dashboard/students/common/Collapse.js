import { useState } from "react";

import styles from "@/styles/Students.module.css";

const Collapse = ({ children, title = `Click to expand` }) => {
  const [expandCollapse, setExpandCollapse] = useState(false);

  const handleExpandCollapse = () => {
    setExpandCollapse(!expandCollapse);
  };

  return (
    <div className={`${styles.collapse}`}>
      <div
        className={`${styles.toggleContain} flex justify-space-between`}
        onClick={handleExpandCollapse}
      >
        <h4>{title}</h4>

        {expandCollapse ? (
          <span>
            <i className="bx bxs-chevron-up"></i>
          </span>
        ) : (
          <span>
            <i className="bx bxs-chevron-down"></i>
          </span>
        )}
      </div>

      <div
        className={`${styles.collapseBody} ${
          expandCollapse ? styles.collapseExpanded : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
