import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/Layout"
import SEOHead from "../components/head"
import MainPage from "../components/templates/MainPage"

export default function Homepage(props) {
  return (
    <Layout>
      <MainPage />
    </Layout>
  )
}
export const Head = (props) => {
  const { homepage } = props.data
  return <SEOHead {...homepage} title="Strona główna" />
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
