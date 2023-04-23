import React from "react"
import Navigation from "../../molecules/Navigation/Navigation"
import { NavBox, LogoBox } from "./NavBar.styles"
import Logo from "../../../images/logo/sygnet.svg"

const NavBar = ({ transparent }) => {
  return (
    <NavBox transparent={transparent}>
      <LogoBox transparent={transparent}>{!transparent && <Logo />}</LogoBox>
      <Navigation />
    </NavBox>
  )
}

export default NavBar
