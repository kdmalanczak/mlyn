import React from "react"
import styled from "styled-components"

const VideoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px auto 15px auto;
`

const StyledIFrame = styled.iframe`
  width: 720px;
  height: 450px;

  @media (max-width: 768px) {
    width: 480px;
    height: 300px;
  }
`

const Video = ({ videoSrcURL, videoTitle }) => (
  <VideoBox>
    <StyledIFrame
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </VideoBox>
)
export default Video
