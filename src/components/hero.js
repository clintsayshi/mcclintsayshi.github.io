/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import styles from "./hero.module.scss"
import "./global.scss"

const Hero = () => {
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
          <div className={styles.heroCoverImg}></div>
          <div className={styles.heroCoverImg}></div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Hero
