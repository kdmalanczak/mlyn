import React from "react"
import { NewsStyledBox, StyledParagraph, NewsBodyBox } from "./News.styles"
import { GatsbyImage } from "gatsby-plugin-image"
import RichText from "../../atoms/Text/RichText"

const NewsBox = ({ date, image, text, ...props }) => {
  return (
    <NewsStyledBox>
      <StyledParagraph>Opublikowano: {date}</StyledParagraph>
      <NewsBodyBox>
        {/* <img src={image} alt={`news from ${date}`} /> */}
        <GatsbyImage image={image?.gatsbyImageData} />
        <RichText text={text} />
      </NewsBodyBox>
    </NewsStyledBox>
  )
}

export default NewsBox
