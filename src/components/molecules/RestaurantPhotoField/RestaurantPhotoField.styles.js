import styled from "styled-components"

export const PhotosField = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  width: 100%;
  grid-gap: 10px;
  grid-template-rows: min-content;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 260px);
    margin: 0 auto;

    img {
      width: 260px;
      height: 162px;
    }
  }
`

export const Photo = styled.img`
  height: 250px;
  width: 400px;
  transition: 0.3s ease-in-out all;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
  }
`
