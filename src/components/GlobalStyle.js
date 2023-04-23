import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 67.5%;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        font-weight: 500;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        scroll-behavior: smooth;
        background-color: #f5f5f5;
    }
    
`
const GlobalStyles = () => {
  return <GlobalStyle />
}

export default GlobalStyles
