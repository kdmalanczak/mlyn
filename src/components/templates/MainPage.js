import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import FrontSection from "../organisms/FrontSection/FrontSection"
import Section from "../organisms/Section/Section"
import Partners from "../organisms/Partners/Partners"
import Video from "../atoms/Video"
import GoogleMap from "../atoms/GoogleMap"

const MainPage = () => {
  const { contentfulAboutUs, contentfulEvent } = useStaticQuery(graphql`
    query {
      # file(relativePath: { eq: "mill.jpg" }) {
      #   childImageSharp {
      #     fluid(quality: 100, maxWidth: 1920) {
      #       ...GatsbyImageSharpFluid
      #     }
      #   }
      # }
      # contentfulAboutUs {
      #   title
      #   childContentfulAboutUsTextRichTextNode {
      #     childContentfulRichText {
      #       html
      #     }
      #   }
      # }
      contentfulAboutUs {
        text {
          raw
        }
        title
      }

      contentfulEvent {
        title
        videoTitle
        youtubeLink
        text {
          raw
        }
      }
      # contentfulEvent {
      #   title
      #   videoTitle
      #   youtubeLink
      #   childContentfulEventTextRichTextNode {
      #     childContentfulRichText {
      #     }
      #   }
      # }
    }
  `)
  // const aboutUs = data.contentfulAboutUs
  // const events = data.contentfulEvent

  return (
    <>
      <FrontSection front title="W Starym Młynie" />
      <Section title={contentfulAboutUs.title} text={contentfulAboutUs.text} />
      <Section title={contentfulEvent.title} text={contentfulEvent.text}>
        {contentfulEvent.youtubeLink && (
          <Video
            videoSrcURL={contentfulEvent.youtubeLink}
            videoTitle={contentfulEvent.videoTitle}
          />
        )}
      </Section>
      <Section title="Polecamy">
        <Partners />
      </Section>
      <Section title="Gdzie się znajdujemy?">
        <GoogleMap />
      </Section>
    </>
  )
}

export default MainPage
