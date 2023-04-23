import React from "react"
import {
  StyledRoom,
  StyledRoomDefinition,
  StyledImages,
  ButtonLink,
} from "./RoomField.styles"
import { GatsbyImage } from "gatsby-plugin-image"
import RichText from "../../atoms/Text/RichText"

const RoomField = ({ images, text, ...props }) => {
  return (
    <StyledRoom>
      <StyledRoomDefinition>
        <RichText text={text} />
      </StyledRoomDefinition>
      <StyledImages>
        {images.slice(0, 6).map((img, i) => (
          <GatsbyImage image={img?.gatsbyImageData} key={i} />
        ))}
      </StyledImages>
      <ButtonLink to="/contact">Zapytaj o dostępność</ButtonLink>
    </StyledRoom>
  )
}

export default RoomField
