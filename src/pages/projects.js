import React from "react"
import { Link } from "gatsby"

import "../components/global.scss"
import styles from "./projectss.module.scss"
import Layout from "../components/layout"

const Projectss = () => {
  return (
    <Layout>
      <div className={`navContainer ${styles.projects}`}>
        <div className="sectionHeader">
          <h3 className="headerText">
            A list of my <span className="blackText">projects</span>
          </h3>
          <div className="line"></div>
        </div>
        <div className={`${styles.projectsContent}`}>
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
