import styled from "styled-components/macro"

type Props = {
  show: boolean
}
export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`
export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`

export const Item = styled.div`
  color: #fff;
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  max-width: 700px;
  &:first-of-type {
    margin-top: 3em;
  }
`

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: #fff;
  text-align: center;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const Body = styled.div`
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  overflow: hidden;
  font-size: 26px;
  padding: 0.8em 2.2em 0.8em 1.2em;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  max-height: 1200px;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`
