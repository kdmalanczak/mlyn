import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/templates/layout"
import SEOHead from "../components/head"
import GuestHouse from "../components/templates/GuestHouse"

export default function Homepage(props) {
  return (
    <Layout>
      <GuestHouse />
    </Layout>
  )
}
export const Head = (props) => {
  const { homepage } = props.data
  return <SEOHead {...homepage} title="Pensjonat"/>
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
