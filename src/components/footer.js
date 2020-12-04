/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { SiTwitter, SiGithub, SiInstagram } from "react-icons/si"

import styles from "./footer.module.scss"
import "./global.scss"

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`container ${styles.innerFooter}`}>
          <div className={`${styles.footerText} normalText`}>
            Clinton Manakane
          </div>

          <div className={styles.socialLinks}>
            <div className={styles.socialLink}>
              <a href="https://www.instagram.com/mcclintsayshi">
                <SiInstagram />
              </a>
            </div>
            <div className={styles.socialLink}>
              <a href="https://www.twitter.com/mcclintsayshi">
                <SiTwitter />
              </a>
            </div>
            <div className={styles.socialLink}>
              <a href="https://www.github.com/mcclintsayshi">
                <SiGithub />
              </a>
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.navLinks}>
            <div className={styles.navLink}>
              <Link to="/">Home</Link>
            </div>
            <div className={styles.navLink}>
              <Link to="/">About</Link>
            </div>
            <div className={styles.navLink}>
              <Link to="/">Projects</Link>
            </div>
            <div className={styles.navLink}>
              <Link to="/">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
