import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  margin: 15px 0 30px 25px;
  text-align: ${({ left }) => (left ? "left" : "center")};
  color: #12324d;
`

const SectionTitle = ({ children, left }) => {
  return <StyledTitle left={left}>{children}</StyledTitle>
}

export default SectionTitle
