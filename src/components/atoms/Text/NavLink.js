import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const StyledLink = styled(Link)`
  font-size: 1.4rem;
  color: #f4f4f4;
  text-decoration: none;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  letter-spacing: 1px;
  font-family: inherit;
  transition: 0.2s ease all;
  color: #bebebe;

  &:hover {
    color: #f4f4f4;
  }
`

const NavLink = ({ path, children }) => {
  return (
    <StyledLink to={`/${path}`} activeStyle={{ color: "#fff" }}>
      {children}
    </StyledLink>
  )
}

export default NavLink
