import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { heroImg } from "@/public/assets";

const HeroSection = () => {
  return (
    <section className={`${styles.hero} flex container`}>
      <div>
        <Image width={800} src={heroImg} priority alt="hero-img" />
      </div>

      <div>
        <h1>
          <span>E-Learning</span> <br /> Management <br /> System
        </h1>

        <p>for all schools</p>
      </div>
    </section>
  );
};

export default HeroSection;
