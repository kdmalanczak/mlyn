import React from "react"
import FrontSection from "../organisms/FrontSection/FrontSection"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../organisms/Section/Section"
import RoomField from "../molecules/RoomField/RoomField"
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
    {
      image: file(relativePath: { eq: "pensjonat2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            layout: FULL_WIDTH
          )
        }
      }
      allContentfulRoom {
        edges {
          node {
            title
            photos {
              gatsbyImageData(width: 400)
            }
            definition {
              raw
            }
          }
        }
      }
    }
  `)

  const rooms = data.allContentfulRoom.edges.filter(
    (e) => e.node.photos.length !== 0
  )
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
        title="Pensjonat"
      />
      {rooms.map((room, i) => (
        <Section title={room.node.title} key={i} left>
          <RoomField images={room.node.photos} text={room.node.definition} />
        </Section>
      ))}
    </>
  )
}

export default GuestHouse
