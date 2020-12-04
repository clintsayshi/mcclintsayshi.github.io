import React from "react"
import { Link } from "gatsby"

import "../components/global.scss"
import styles from "./projectss.module.scss"
import Layout from "../components/layout"

const Projectss = () => {
  return (
    <Layout>
      <div className={`container ${styles.projects}`}>
        <div className="sectionHeader">
          <h3 style={{ textTransform: "uppercase" }} className="headerText">
            A list of my <span className="blackText">P</span>rojects
          </h3>
          <div className="line"></div>
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
          <div className={styles.project}>
            <div className={styles.projectCover}></div>
            <h4 className={styles.projectName}>Project Name Here</h4>
            <Link to="/" className={styles.projectAction}>
              View Project
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projectss
