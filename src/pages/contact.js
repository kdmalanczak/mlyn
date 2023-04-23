import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/layout"
import SEOHead from "../components/head"
import Contact from "../components/templates/Contact"

export default function Homepage(props) {
  return (
    <Layout>
      <Contact />
    </Layout>
  )
}
export const Head = (props) => {
  const { homepage } = props.data
  return <SEOHead {...homepage}  title="Kontakt" />
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
