import React from "react"

import "../components/global.scss"
import styles from "./projectss.module.scss"
import Layout from "../components/layout"

const Project = () => {
  return (
    <Layout>
      <main className={`navContainer ${styles.projects}`}>
        <div className={styles.pageHeader}>
          <h5 className={styles.headerFrom}>Projects&nbsp;/&nbsp;</h5>
          <h3 className={styles.headerText}>My Project Name Goes Here</h3>
        </div>

        <div className={styles.projectsAction}>
          <a
            href="https://www.mcclintsayshi.github.io/portfolio"
            className="btn"
          >
            View Demo
          </a>
        </div>
      </main>
    </Layout>
  )
}

export default Project
