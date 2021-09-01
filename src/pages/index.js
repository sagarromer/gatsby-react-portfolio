import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout2"
import Hero from "../components/Hero"
import Seo from "../components/seo"
import Services from "../components/Services"
import Jobs from "../components/Jobs"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Services />
    <Jobs />
  </Layout>
)

export default IndexPage
