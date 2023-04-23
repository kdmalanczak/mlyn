import React from "react"
import { PartnerBox } from "./Partner.styles"
import { GatsbyImage } from "gatsby-plugin-image"

const Partner = ({ image, link }) => {
  console.log(image)
  return (
    <PartnerBox>
      <a href={link} target="_blank" rel="noreferrer">
        <GatsbyImage image={image?.gatsbyImageData} alt={link} />
      </a>
    </PartnerBox>
  )
}

export default Partner
