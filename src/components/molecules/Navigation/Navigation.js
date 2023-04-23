import React, { useState, useRef, useCallback } from "react"
import StyledLink from "../../atoms/Text/NavLink"
import { LinksBox, NavigationBox } from "./Navigation.styles"
import { useOnClickOutside } from "../../../hooks/useOnClickOutside"

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const secondRef = useRef()

  const closeNavOutside = useCallback(() => setOpen(false), [])
  useOnClickOutside(closeNavOutside, ref, secondRef)

  return (
    <>
      <NavigationBox ref={secondRef} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </NavigationBox>
      <LinksBox open={open} ref={ref}>
        <StyledLink path="">Strona główna</StyledLink>
        <StyledLink path="restaurant/">Restauracja</StyledLink>
        <StyledLink path="menu/">Menu</StyledLink>
        <StyledLink path="guest-house/">Pensjonat</StyledLink>
        <StyledLink path="news/">Aktualności</StyledLink>
        <StyledLink path="contact/">Kontakt</StyledLink>
      </LinksBox>
    </>
  )
}

export default Navigation
