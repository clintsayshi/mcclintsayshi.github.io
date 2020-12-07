import React from "react"
import { Link } from "gatsby"

import "../global.scss"
import styles from "./home.module.scss"
//FILES
import resume from "../../images/Dikgang_Clinton Manakane_Resume_07-12-2020.pdf"

const Skills = () => {
  return (
    <section id="skills" className={`container ${styles.skills}`}>
      <div className="sectionHeader">
        <h3 className="headerText">
          My <span className="blackText">skills</span>
        </h3>
      </div>
      <div className={styles.skillsContent}>
        <p className={styles.pText}>
          The main area of my expertise is front end development (client side of
          the web).
        </p>

        <p className={styles.pText}>
          <span className="blackText">
            HTML, CSS, JavaScript(ReactJS, Gatsby)
          </span>
          , building websites and small medium apps with React, Gatsby etc.
        </p>

        <p className={styles.pText}>
          Visit my <a href="https://linkedin/in/mcclintsayshi">LinkedIn</a> for
          information on my previous work or{" "}
          <Link to="/#contact">contact me</Link>.
        </p>

        <a target="_blank" className="btn" href={resume} download>
          My Resume (672kb)
        </a>
      </div>
    </section>
  )
}

export default Skills
