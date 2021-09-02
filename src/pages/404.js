import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout2"
import Seo from "../components/seo"

const Error = () => (
  <Layout>
    <main className="error-page">
      <div className="error-container">
        <h1>oops it's a dead end</h1>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </main>
  </Layout>
)

export default Error
