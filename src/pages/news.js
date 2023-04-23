import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/layout"
import SEOHead from "../components/head"
import News from "../components/templates/News"

export default function Homepage(props) {
  return (
    <Layout>
      <News />
    </Layout>
  )
}
export const Head = (props) => {
  const { homepage } = props.data
  return <SEOHead {...homepage} title="Aktualności" />
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
