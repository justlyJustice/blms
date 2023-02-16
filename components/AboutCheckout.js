import styles from "@/styles/Home.module.css";

const AboutCheckout = () => {
  return (
    <section className={`flex container ${styles.aboutCheckout}`}>
      <div className={styles.aboutSection}>
        <h2>
          About <span>BLMS</span>
        </h2>

        <div className={styles.hrs}>
          <hr />
          <hr />
          <hr />
        </div>

        <div className={styles.textDiv}>
          <p>
            BLMS is a learning management software application or web-based
            technology used to plan, implement and assess specific learning
            process. It is used for eLearning practices and, in its most common
            form, consists of two elements: a server that performs the base
            functionality and a user interface that is operated by instructors,
            students and administrators.
          </p>
        </div>
      </div>

      <div className={styles.checkoutContain}>
        <i className="bx bx-search-alt"></i>

        <h3>
          Checkout <br /> News & <br /> Updates
        </h3>
      </div>
    </section>
  );
};

export default AboutCheckout;
