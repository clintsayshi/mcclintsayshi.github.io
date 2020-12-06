import React from "react"

import "../global.scss"
import styles from "./home.module.scss"

const About = () => {
  return (
    <section id="about" className={`container ${styles.about}`}>
      <div className="sectionHeader">
        <h3 className="headerText">
          About <span className="blackText">me</span>
        </h3>
      </div>
      <div className={styles.skillsContent}>
        <p className={styles.pText}>I design and code websites.</p>

        <p className={styles.pText}>
          I am currently job seeking and open for freelance work.
        </p>

        <p className={styles.pText}>
          If I am not working on my design and coding skills I am probably on
          twitter talking to strangers about music, movies, or actually watching
          movies/series.
        </p>
      </div>
    </section>
  )
}

export default About
