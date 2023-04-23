import styled from "styled-components"

const CookiesButton = styled.button`
  border: none;
  background-color: #f4f4f4;
  padding: 10px 20px;
  font-family: inherit;
  max-width: 300px;
  margin: 0 auto;
  color: #0d2538;
  letter-spacing: 0.1em;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`

export default CookiesButton
