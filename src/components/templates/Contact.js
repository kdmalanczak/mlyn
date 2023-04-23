import React from "react"
import FrontSection from "../organisms/FrontSection/FrontSection"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../organisms/Section/Section"
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

const GuestHouse = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "kontakt1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            layout: FULL_WIDTH
          )
        }
      }
      contentfulContact {
        text {
          raw
        }
        title
      }
    }
  `)
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
        title="Kontakt"
      />
      <Section
        title={data.contentfulContact.title}
        text={data.contentfulContact.text}
      />
    </>
  )
}

export default GuestHouse
