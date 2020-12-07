/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styles from "./hero.module.scss"
import "./global.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <div className={styles.hero}>
      <div className={`${styles.container}`}>
        <div className={`container ${styles.heroCaption}`}>
          <p className={styles.heroP}>
            Hello, My Name Is Clinton. A Front End Web Developer Living In
            Tembisa, GP
          </p>
        </div>
        <div className={styles.heroCover}>
          <div className={styles.heroCoverImg}></div>

          <Img
            className={styles.heroCoverImg}
            fluid={data.file.childImageSharp.fluid}
          />

          <div className={styles.heroCoverImg}></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
