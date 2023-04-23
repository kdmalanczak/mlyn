import React from "react"
import FrontSection from "../organisms/FrontSection/FrontSection"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../organisms/Section/Section"
import CategoriesField from "../molecules/CategoryField/CategoryField.js"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import styled from "styled-components"

const StyledBackgroundSection = styled(BackgroundImage)`
  height: 100%;
  background-position: center 100%;
  background-repeat: no-repeat;
  background-size: cover;
`

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "danie1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            layout: FULL_WIDTH
          )
        }
      }

      allContentfulMenuCategory {
        edges {
          node {
            title
            products {
              raw
            }
          }
        }
      }
    }
  `)

  const categories = data.allContentfulMenuCategory.edges
  const img = getImage(data.image)
  const bgImage = convertToBgImage(img)

  return (
    <>
      <FrontSection
        imageComponent={
          <StyledBackgroundSection
            Tag="div"
            {...bgImage}
            preserveStackingContext
          />
        }
        title="Nasze Menu"
      />
      {categories.map((category, i) => (
        <Section key={i} title={category.node.title}>
          <CategoriesField key={i} text={category.node.products} />
        </Section>
      ))}
    </>
  )
}

export default Menu
