import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/Layout2"
import Hero from "../components/Hero"
import Seo from "../components/seo"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

const IndexPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="featured projects" showLink projects={projects} />
        <Blogs blogs={blogs} title="latest articles" showLink />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        description
        featured
        github
        id
        title
        url
        stack {
          id
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      totalCount
    }
    allStrapiBlogs(limit: 3, sort: { fields: date, order: DESC }) {
      nodes {
        content
        slug
        date(formatString: "MMMM Do, YYYY")
        desc
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
