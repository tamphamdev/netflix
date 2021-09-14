import React from "react"
import { Link as ReactRouterLink } from "react-router-dom"
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
} from "./styles/header"

type Props = {
  to?: string
  background?: boolean
  children: any
  [x: string]: any
}

type LogoProps = {
  to: string
  [x: string]: any
}
export default function Header({
  background = true,
  children,
  ...restProps
}: Props) {
  return background ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    children
  )
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Header.Frame = function HeaderFrame({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }: LogoProps) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}

Header.ButtonLink = function HeaderButtonLink({
  children,
  ...restProps
}: Props) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}
