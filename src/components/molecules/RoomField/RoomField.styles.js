import styled from "styled-components"
import { Link } from "gatsby"

export const StyledRoom = styled.div`
  display: flex;
  padding-bottom: 35px;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    height: min-content;
  }

  p {
    font-size: 1.2rem;
    margin: 5px 0;
  }
  ul {
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      width: 260px;
    }
  }
`

export const StyledRoomDefinition = styled.div`
  display: block;
  width: auto;
  overflow-wrap: break-word;
  margin: 0 20px;
`

export const StyledImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  width: 100%;
  grid-gap: 10px;
  grid-auto-rows: auto; 
  justify-content: center;
  margin: 20px auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, 260px);
    margin: 20px auto 0 auto;

    img {
      width: 260px;
    }
  }

  img {
    transition: 0.3s ease-in-out all;

    &:hover {
      transform: scale(1.05);
      z-index: 2;
    }
  }
`
export const ButtonLink = styled(Link)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  background-color: #12324d;
  border: none;
  padding: 15px;
  color: #f4f4f4;
  transition: 0.3s all ease-in-out;
  font-family: inherit;
  width: max-content;

  &:hover {
    color: #fff;
    /* transform: translateX(-50%) scale(1.02); */
    background: #15446b;
  }
`
