import React from "react"
import { Container, Input, Button, Text, Break } from "./styles/opt-form"

type Props = {
  children: React.ReactNode
}

export default function OptForm({ children, ...resProps }: Props) {
  return <Container {...resProps}>{children}</Container>
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({ children, ...restProps }: Props) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  )
}

OptForm.Text = function OptFormText({ children, ...restProps }: Props) {
  return <Text {...restProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />
}
