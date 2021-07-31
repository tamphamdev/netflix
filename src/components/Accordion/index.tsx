import React, { useState, useContext, createContext } from "react"
import {
  Container,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from "../Accordion/styles/accordion"
type Props = {
  children: React.ReactNode
}

type ContextType = {
  toggleShow: boolean
  setToggleShow: (value: boolean) => void
}

const contextDefaultValues: ContextType = {
  toggleShow: false,
  setToggleShow: (): void => {},
}

const ToggleContext = createContext(contextDefaultValues)
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

Accordion.Item = function AccordionItem({ children, ...restProps }: Props) {
  const [toggleShow, setToggleShow] = useState(false)

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }: Props) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }: Props) {
  const { toggleShow } = useContext(ToggleContext)

  return toggleShow ? <Body {...restProps}>{children}</Body> : null
}
