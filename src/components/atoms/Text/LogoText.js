import React from "react"
import styled from "styled-components"

const StyledHeader = styled.h3`
  padding: 0 25px 10px 25px;
  border-bottom: 1px solid #fff;
  font-family: "Playball", cursive;
  font-weight: 400;
  color: #f4f4f4;
  font-size: 40px;
  margin: 15px 0;
  position: relative;
  animation: fadeIn ease-out 1.5s;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 8px;
    border-bottom: 2px solid #fff;
    width: calc(100% - 16px);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const LogoText = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>
}

export default LogoText
