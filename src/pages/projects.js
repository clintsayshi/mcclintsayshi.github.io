import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import "../components/global.scss"
import styles from "./projectss.module.scss"
import Layout from "../components/layout"

const Projectss = ({ data }) => {
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
            <Img
              className={styles.projectCover}
              fluid={data.file.childImageSharp.fluid}
            />

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

export const query = graphql`
  query {
    file(relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
