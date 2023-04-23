import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import { graphql, useStaticQuery } from "gatsby"

const StyledBackgroundSection = styled(BackgroundImage)`
  height: 100%;
  background-position: center 60%;
  background-repeat: no-repeat;
  background-size: cover;
`
const Background = () => {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mill.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            layout: FULL_WIDTH
          )
        }
      }
    }
  `)

  const image = getImage(placeholderImage)
  const bgImage = convertToBgImage(image)

  return (
    <StyledBackgroundSection Tag="div" {...bgImage} preserveStackingContext />
  )
}

export default Background
