import React, { useRef, useEffect, useState } from "react"
import SectionHeader from "../../molecules/SectionHeader/SectionHeader"
import { SectionBox } from "./Section.styles"
import { useOnScreen } from "../../../hooks/useOnScreen"

const Section = ({ text, title, children, left = false }) => {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  const onScreen = useOnScreen(ref)

  useEffect(() => {
    if (onScreen) setVisible(true)
  }, [onScreen])

  return (
    <SectionBox ref={ref}>
      {visible ? (
        <>
          <SectionHeader title={title} text={text} left={left} />
          {children}
        </>
      ) : (
        <div style={{ height: "200px" }} />
      )}
    </SectionBox>
  )
}

export default Section
