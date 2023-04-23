import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
  margin: 5px 5px 5px 10px;
  font-size: 1.4rem;
`

const Paragraph = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>
}

export default Paragraph
