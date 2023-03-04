import styles from "@/styles/training-portal/Portal.module.css";

const UploadCard = ({ text = "" }) => {
  return (
    <div className={`${styles.uploadCard} flex`}>
      <h3>{text}</h3>
    </div>
  );
};

export default UploadCard;
