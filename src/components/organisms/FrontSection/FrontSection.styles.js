import styled from "styled-components"

export const FrontBox = styled.section`
  height: ${({ front }) => (front ? "100vh" : "60vh")};
  position: relative;
`

export const DarkenBackground = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #121b3059;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;

  /* global - theme - color */
`
