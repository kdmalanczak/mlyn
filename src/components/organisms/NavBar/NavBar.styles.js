import styled from "styled-components"

export const NavBox = styled.nav`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "#0d2538"};
  position: fixed;
  z-index: 5;
  transition: background-color 0.3s ease;
`

export const LogoBox = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  opacity: ${({ transparent }) => (transparent ? "0" : "1")};

  svg {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 5px;
  }
`
