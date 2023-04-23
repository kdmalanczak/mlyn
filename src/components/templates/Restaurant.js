import React from "react"
import FrontSection from "../organisms/FrontSection/FrontSection"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../organisms/Section/Section"
import RestaurantPhotoField from "../molecules/RestaurantPhotoField/RestaurantPhotoField"
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

const Restaurant = () => {
  const { contentfulRestaurant, image, contentfulRestaurantPhotos } =
    useStaticQuery(graphql`
      query {
        image: file(relativePath: { eq: "restaurant1.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 100
              layout: FULL_WIDTH
            )
          }
        }

        contentfulRestaurant {
          title
          text {
            raw
          }
        }
        contentfulRestaurantPhotos {
          title
          photos {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 100
              width: 400
              # layout:
            )
          }
        }
      }
    `)

  const img = getImage(image)
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
        title="Restauracja"
      />
      <Section
        title={contentfulRestaurant.title}
        text={contentfulRestaurant.text}
      />
      <Section title={contentfulRestaurantPhotos.title}>
        <RestaurantPhotoField images={contentfulRestaurantPhotos.photos} />
      </Section>
    </>
  )
}

export default Restaurant
