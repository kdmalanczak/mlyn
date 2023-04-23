import React, { useCallback } from "react"
import styled from "styled-components"

const StyledScrollButton = styled.button`
  position: absolute;
  bottom: 5px;
  left: 50%;
  z-index: 2;
  border: none;
  background-color: transparent;
  font-family: inherit;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #fff;
  letter-spacing: 0.1em;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }

  span {
    position: absolute;
    top: -35px;
    left: 20px;
    width: 16px;
    height: 16px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    animation: scrollButton 4s infinite;
    box-sizing: border-box;
  }

  @keyframes scrollButton {
    0% {
      transform: rotate(-45deg) translate(0, 0);
    }
    10% {
      transform: rotate(-45deg) translate(-10px, 10px);
    }
    20% {
      transform: rotate(-45deg) translate(0, 0);
    }
  }
`

const ButtonScroll = () => {
  const scroller = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight + 5,
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <StyledScrollButton onClick={scroller}>
      <span></span>Scroll
    </StyledScrollButton>
  )
}

export default ButtonScroll
