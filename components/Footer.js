import { logo } from "@/public/assets";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.logoContain}>
      <Image src={logo} width={100} alt={`logo`} priority quality={100} />
    </div>

    <div className={`flex ${styles.infoContain}`}>
      <div className={styles.item}>
        <div>
          <h2>Quick Links</h2>
        </div>

        <ul>
          <li>
            <Link href={`/`}>Online Courses</Link>
          </li>

          <li>
            <Link href={`/`}>Upcoming Courses</Link>
          </li>

          <li>
            <Link href={`/`}>Student’s Guide</Link>
          </li>

          <li>
            <Link href={`/`}>Teacher’s Guide</Link>
          </li>

          <li>
            <Link href={`/`}>Latest News</Link>
          </li>
        </ul>
      </div>

      <div className={styles.item}>
        <div>
          <h2>Developer’s Info</h2>
        </div>

        <div className={styles.developerInfo}>
          <p>Boungbai Computers Netware Ltd.</p>

          <p className="flex flex-md-column justify-space-between">
            <span>
              <i className="txt-info bx bx-globe"></i> www.boungbai.com
            </span>

            <span>
              <i className="txt-info bx bxs-phone-call"></i> 07061995768
            </span>
          </p>

          <p>
            No. 30, Opp. Sonia Estate, Ebi’s Mechanic <br /> Road, Amarata,
            Yenagoa, Bayelsa State
          </p>
        </div>
      </div>

      <div className={styles.item}>
        <div>
          <h2>Contact Us</h2>
        </div>

        <div>
          <p>info@blms.edu.ng</p>

          <div className="flex flex-md-column justify-space-between my-5">
            <i className="txt-info bx bxl-facebook-circle"></i>

            <i className="txt-info bx bxl-twitter"></i>

            <i className="txt-info bx bxl-linkedin-square"></i>

            <i className="txt-info bx bxl-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
