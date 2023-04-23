import styled from "styled-components"

export const StyledCategory = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  p {
    font-size: 1.2rem;
    margin: 0;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 15px 0 3px 0;

    li {
      text-align: justify;
      padding-right: 60px;
      position: relative;

      p {
        font-size: 1.6rem;
        margin: 0;
      }

      b {
        position: absolute;
        right: 0;
      }
    }
  }
`
