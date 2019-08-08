import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="err-404">
      <div>
        <h1 className="h1">
          404
        </h1>
        <div className="err-text">
          <h2 className="h2">
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
