import React, { useState, useContext, createContext } from "react"
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from "../Accordion/styles/accordion"
type Props = {
  children: React.ReactNode
}
const ToggleContext = createContext()
export default function Accordion({ children, ...restProps }: Props) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }: Props) {
  return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }: Props) {
  return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({ children, ...restProps }: Props) {
  const [togglerShow, setToggleShow] = useState(false)

  return (
    <ToggleContext.Provider value={{ togglerShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }: Props) {
  const [toggleShow, setToggleShow] = useState(ToggleContext)

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
    </Header>
  )
}

Accordion.Body = function AccordtionBody({ children, ...restProps }: Props) {
  const { toggleShow } = useContext(ToggleContext)

  return toggleShow ? <Body {...restProps}>{children}</Body> : null
}
