import React from "react"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/Home/about"
import Skills from "../components/Home/skills"

import Contact from "../components/Home/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    {/* My Picture here lol */}
    <About />
    <Skills />

    <Contact />
  </Layout>
)

export default IndexPage
