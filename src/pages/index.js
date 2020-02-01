import React from "react"
import Layout from "../components/layout"
import "../styles/index.scss"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <html lang="pl" />
      <title>
        Neverage.
          </title>
      <meta
        name="description"
        content="Neverage"
      />

    </Helmet>
  </Layout>
)

export default IndexPage
