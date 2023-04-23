import React, { useRef, useContext, useEffect } from "react"
import { DarkenBackground, FrontBox } from "./FrontSection.styles"
import Logo from "../../atoms/Logo"
import Background from "../../atoms/Background"
import { useOnScreen } from "../../../hooks/useOnScreen"
import LogoText from "../../atoms/Text/LogoText"
import ButtonScroll from "../../atoms/ButtonScroll"
import { NavContext } from "../../templates/Layout"

const FrontSection = ({ imageComponent, front = false, title }) => {
  const ref = useRef()
  const onScreen = useOnScreen(ref)

  const { changeNavVisibility } = useContext(NavContext)

  useEffect(() => {
    changeNavVisibility(onScreen)
  }, [onScreen, changeNavVisibility])

  return (
    <FrontBox front={front} ref={ref}>
      {imageComponent ? imageComponent : <Background />}

      <DarkenBackground>
        {front && <Logo />}
        <LogoText>{title}</LogoText>
        {front && <ButtonScroll />}
      </DarkenBackground>
    </FrontBox>
  )
}

export default FrontSection
