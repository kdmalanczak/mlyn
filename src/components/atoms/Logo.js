import React from "react"
import Logoo from "../../images/logo/final-logo.svg"
import styled from "styled-components"

const LogoAnimation = styled.div`
  animation: fadeIn ease-out 1.5s;
  width: 220px;
  height: 220px;

  svg {
    width: 100%;
    height: 100%;
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

const Logo = () => {
  return (
    <LogoAnimation>
      <Logoo />
    </LogoAnimation>
  )
}

export default Logo
