import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

//CSS
import "./global.scss"
import styles from "./header.module.scss"

const Header = ({ siteTitle }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <header>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.navLogo}>
          <span className="blackText">C</span>linton
          <br />
          Manakane
        </Link>

        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => setToggle(!toggle)}
          onClick={() => setToggle(!toggle)}
          className={styles.navToggle}
        >
          {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <div
          className={
            toggle
              ? `${styles.navLinks} ${styles.navLinksToggle}`
              : styles.navLinks
          }
        >
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => setToggle(!toggle)}
            onClick={() => setToggle(!toggle)}
            className={styles.navLink}
          >
            <Link to="/#about">About me</Link>
          </div>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => setToggle(!toggle)}
            onClick={() => setToggle(!toggle)}
            className={styles.navLink}
          >
            <Link role="presentation" to="/#skills">
              Skills
            </Link>
          </div>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => setToggle(!toggle)}
            onClick={() => setToggle(!toggle)}
            className={styles.navLink}
          >
            <Link role="presentation" to="/projects/">
              Projects
            </Link>
          </div>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => setToggle(!toggle)}
            onClick={() => setToggle(!toggle)}
            className={styles.navLink}
          >
            <Link role="presentation" to="/">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
