import React, { Children, useState } from "react"
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
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from "./styles/header"

type Props = {
  to?: string
  background?: boolean
  children: React.ReactChild | React.ReactChild[]
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

Header.Feature = function HeaderFeature({ children, ...restProps }: Props) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}: Props) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Profile = function HeaderProfile({ children, ...restProps }: Props) {
  return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps }: PictureProps) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Search {...restProps}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search files and series"
        active={searchActive}
      />
    </Search>
  )
}

Header.Text = function HeaderText({ children, ...restProps }: Props) {
  return <Text {...restProps}>{children}</Text>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }: Props) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }: Props) {
  return <Link {...restProps}>{children}</Link>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
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
