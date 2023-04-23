import styled from "styled-components"

export const FooterBox = styled.footer`
  height: min-content;
  width: 100%;
  background-color: #0e1525;
  margin-top: 40px;
  font-size: 1.2rem;
  color: #f4f4f4;
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    margin: 25px 0;
  }
`

export const FooterInfo = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  padding: 0 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-height: 120px;
    padding: 15px 0;

    svg {
      padding: 0;
    }

    p {
      margin: 5px 0;
    }
  }
`
