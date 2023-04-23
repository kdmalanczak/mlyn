import React from "react"
import { StyledCategory } from "./CategoryField.styles"
import RichText from "../../atoms/Text/RichText"

const CategoryField = ({ text, ...props }) => {
  return (
    <StyledCategory {...props}>
      <RichText text={text} />
    </StyledCategory>
  )
}

export default CategoryField
