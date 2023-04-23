import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/Layout"
import SEOHead from "../components/head"
import Menu from "../components/templates/Menu"

export default function Homepage(props) {
  return (
    <Layout>
      <Menu />
    </Layout>
  )
}
export const Head = (props) => {
  const { homepage } = props.data
  return <SEOHead {...homepage} title="Nasze menu" />
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
