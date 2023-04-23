import styled from "styled-components"

export const NewsStyledBox = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`

export const StyledParagraph = styled.p`
  font-size: 1.6rem;
  color: gray;
  margin: 20px;
`

export const NewsBodyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 20px auto 10px auto;
    height: 300px;
    justify-self: center;

    @media (max-width: 1360px) {
      height: 240px;
    }

    @media (max-width: 768px) {
      max-width: 260px;
      height: auto;
    }
  }

  p {
    img {
      margin: 10px auto;
    }
  }
`
