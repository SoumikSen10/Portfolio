import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} id="hero">
          Hi, I'm Soumik Sen
        </h1>
        <p className={styles.description}>
          a passionate Computer Science and Engineering undergrad specializing
          in Data Science. My journey involves constant exploration of new
          skills and tools, fueled by a curiosity for innovation.
        </p>
        <div className={styles.buttons}>
          <a
            href="mailto:soumik.sen.2003@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>

          <a
            href="/resume/Soumik_Sen_Resume.pdf"
            className={styles.contactBtn}
            download
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
