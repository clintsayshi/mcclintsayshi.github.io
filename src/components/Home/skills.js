import React from "react"

import "../global.scss"
import styles from "./home.module.scss"

const Skills = () => {
  return (
    <section className={`container ${styles.skills}`}>
      <div className="sectionHeader">
        <h3 className="headerText">
          My <span className="blackText">s</span>kills
        </h3>
        <div className="line"></div>
      </div>
      <div className={styles.skillsContent}>
        <div className={styles.mainSkills}>
          <p>Web Design</p>
          <p>Responsive Web Design</p>
          <p>User Interface Design</p>
        </div>
        <div className={styles.specificSkills}>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Reactjs</p>
          <p>Gatsby</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
