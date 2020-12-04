import React from "react"
import { Link } from "gatsby"

import "../global.scss"
import styles from "./home.module.scss"

const Projects = () => {
  return (
    <section className={`container ${styles.projects}`}>
      <div className="sectionHeader">
        <div className="line"></div>
        <h3 className="headerText">
          My <span className="blackText">w</span>ork
        </h3>
      </div>
      <div className={styles.projectsContent}>
        <div className={styles.project}>
          <div className={styles.projectCover}></div>
          <h4 className={styles.projectName}>Project Name Here</h4>
          <Link to="/" className={styles.projectAction}>
            View Project
          </Link>
        </div>
        <div className={styles.project}>
          <div className={styles.projectCover}></div>
          <h4 className={styles.projectName}>Project Name Here</h4>
          <Link to="/" className={styles.projectAction}>
            View Project
          </Link>
        </div>
        <div className={styles.project}>
          <div className={styles.projectCover}></div>
          <h4 className={styles.projectName}>Project Name Here</h4>
          <Link to="/" className={styles.projectAction}>
            View Project
          </Link>
        </div>
      </div>

      <div className={styles.projectsAction}>
        <Link className="btn">View More Projects</Link>
      </div>
    </section>
  )
}

export default Projects
