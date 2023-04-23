import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/layout"
import SEOHead from "../components/head"
import Restaurant from "../components/templates/Restaurant"

export default function Homepage(props) {
  return (
    <Layout>
      <Restaurant />
    </Layout>
  )
}
export const Head = (props) => {
  const { homepage } = props.data
  return <SEOHead {...homepage} title="Restauracja"/>
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
