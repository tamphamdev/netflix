import styled from "styled-components/macro";

type Props = {
  direction: string
}

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: #fff;
  overflow: hidden;
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({direction}:Props) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width:  1000px) {
    flex-direction: column;
  }
`
export const Container = styled.div``

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 100px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`
export const Title = styled.h2`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
export const SubTitle = styled.h3`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

`
export const Image = styled.img`
  max-width: 100%;
  height: auto;

`