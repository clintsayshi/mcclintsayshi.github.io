import React from "react"

import "../global.scss"
import styles from "./home.module.scss"

const About = () => {
  return (
    <section className={`container ${styles.about}`}>
      <div className={styles.aboutCover}></div>
      <div className={styles.aboutText}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          ullam libero doloribus amet, sapiente, veniam non est modi repellendus
          et voluptatibus quam autem quod reiciendis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          ullam libero doloribus amet, sapiente, veniam non est modi repellendus
          et voluptatibus quam autem quod reiciendis?
        </p>
      </div>
    </section>
  )
}

export default About
