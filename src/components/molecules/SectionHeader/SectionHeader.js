import React from "react"
import SectionTitle from "../../atoms/Text/SectionTitle"
import RichText from "../../atoms/Text/RichText"

const SectionHeader = ({ title, text = "", left }) => {
  return (
    <>
      <SectionTitle left={left}>{title}</SectionTitle>
      <RichText text={text} />
    </>
  )
}

export default SectionHeader
