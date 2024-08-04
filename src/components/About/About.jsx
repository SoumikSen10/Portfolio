import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/*  <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>FULL &nbsp; STACK &nbsp; DEVELOPMENT</h3>
              <p>
                A proficient full stack developer skilled in creating dynamic
                and responsive web applications using the MERN stack. Adept at
                both frontend and backend development, ensuring seamless user
                experiences and efficient data management.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>MACHINE &nbsp; LEARNING</h3>
              <p>
                A passionate machine learning enthusiast with a keen interest in
                exploring and applying machine learning algorithms and
                techniques to solve real-world problems. Continuously learning
                and experimenting with new ML models and tools.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
