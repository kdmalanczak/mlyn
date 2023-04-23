import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Partner from "../../molecules/Partner/Partner"
import { PartnersBox } from "./Partners.styles"

const Partners = () => {
  const { allContentfulPartner: data } = useStaticQuery(graphql`
    query {
      allContentfulPartner {
        edges {
          node {
            link
            photo {
              gatsbyImageData(width: 250)
            }
          }
        }
      }
    }
  `)

  return (
    <PartnersBox>
      {data.edges
        .filter((e) => {
          return e.node.photo !== null
        })
        .map((elem, i) => (
          <Partner key={i} image={elem.node.photo} link={elem.node.link} />
        ))}
    </PartnersBox>
  )
}

export default Partners
