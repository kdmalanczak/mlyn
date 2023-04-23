import React, { useRef } from "react"
import { FooterBox, FooterInfo } from "./Footer.styles"
import { graphql, useStaticQuery } from "gatsby"
import Logo from "../../atoms/Logo"
import { useOnScreen } from "../../../hooks/useOnScreen"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref)

  return (
    <FooterBox>
      <FooterInfo>
        <div>
          <h4>Kontakt</h4>
          <p>Tel. +48 71 383 32 31</p>
          <p>Email: kontakt@stary-mlyn.com.pl</p>
        </div>
        <Logo />
        <div ref={ref}>
          <h4>Polecamy</h4>
          {onScreen && (
            <div
              style={{
                position: "relative",
                width: 270,
                height: 74,
                padding: 0,
              }}
            >
              <StaticImage
                src="../../../images/mlyn-poleca.png"
                alt="polecamy"
                layout="fixed"
              />
            </div>
          )}
        </div>
      </FooterInfo>
      <p>
        © {new Date().getFullYear()}, W Starym Młynie. Wszelkie prawa
        zastrzeżone
      </p>
    </FooterBox>
  )
}

export default Footer
