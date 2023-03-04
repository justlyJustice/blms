import styles from "@/styles/teacher/Topbar.module.css";

const Searchbox = () => {
  return (
    <div className={`flex ${styles.searchbox}`}>
      <input placeholder={`Search`} name={`term`} />

      <i className="bx bx-search-alt"></i>
    </div>
  );
};

export default Searchbox;
