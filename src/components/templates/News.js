import React from "react"
import FrontSection from "../organisms/FrontSection/FrontSection"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../organisms/Section/Section"
import NewsBox from "../molecules/News/News"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import styled from "styled-components"

const StyledBackgroundSection = styled(BackgroundImage)`
  height: 100%;
  background-position: center 100%;
  background-repeat: no-repeat;
  background-size: cover;
`

const News = () => {
  const { allContentfulNews, image } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "radio.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            quality: 100
            layout: FULL_WIDTH
          )
        }
      }

      allContentfulNews(sort: { publishDate: ASC }) {
        edges {
          node {
            id
            title
            publishDate(formatString: "DD.MM.YYYY")
            text {
              raw
            }
            image {
              url
              alt
              gatsbyImageData(width: 500)
            }
          }
        }
      }
    }
  `)

  const news = allContentfulNews.edges.filter((el) => el.node.image !== null)

  const img = getImage(image)
  const bgImage = convertToBgImage(img)

  return (
    <>
      <FrontSection
        title="Aktualne Informacje"
        imageComponent={
          <StyledBackgroundSection
            Tag="div"
            {...bgImage}
            preserveStackingContext
          />
        }
      />
      {news
        .slice(0)
        .filter((e) => e.node.image !== null)
        .reverse()
        .map((item, i) => (
          <Section key={i} title={item.node.title}>
            <NewsBox
              date={item.node.publishDate}
              image={item.node.image}
              key={i}
              text={item.node.text}
              // dangerouslySetInnerHTML={{
              //   __html:
              //     item.node.childContentfulNewsTextRichTextNode
              //       .childContentfulRichText.html,
              // }}
            />
          </Section>
        ))}
    </>
  )
}

export default News
