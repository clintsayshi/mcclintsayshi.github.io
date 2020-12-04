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
    <>
      <div className={styles.hero}>
        <div className={`container ${styles.innerHero}`}>
          <h2 className={styles.heroText}>
            I am a<br />
            <span className="blackText">f</span>
            rontend&nbsp;
            <span className="blackText">d</span>eveloper
            <br />
            I&nbsp;
            <span className="blackText">d</span>esign &amp;&nbsp;
            <span className="blackText">c</span>ode&nbsp;
            <br />
            <span className="blackText">w</span>ebsites and&nbsp;
            <span className="blackText">a</span>pps
          </h2>
        </div>
      </div>
    </>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Hero
