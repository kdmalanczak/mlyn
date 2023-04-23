import * as React from "react"
import Layout from "../components/templates/Layout"
import SEOHead from "../components/head"
import { graphql } from "gatsby"

export default function NotFound() {
  return (
    <Layout isNot404={false}>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const Head = (props) => {
  const { homepage } = props.data
  return <SEOHead {...homepage} title="404: Page not found" />
}

export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
    }
  }
`
