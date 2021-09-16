import React, { Children } from "react"
import { Link as ReactRouterLink } from "react-router-dom"
import {
  Background,
  Container,
  Logo,
  Group,
  Picture,
  ButtonLink,
  Feature,
  Dropdown,
  Text,
  Profile,
  FeatureCallOut,
  Link,
} from "./styles/header"

type Props = {
  to?: string
  background?: boolean
  children: any
  [x: string]: any
}
type PictureProps = {
  src: string
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

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps }: PictureProps) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }: Props) {
  return <Link {...restProps}>{children}</Link>
}

Header.Frame = function HeaderFrame({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }: Props) {
  return <Group {...restProps}>{children}</Group>
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
