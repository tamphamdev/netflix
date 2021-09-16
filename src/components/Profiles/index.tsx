import React from "react"
import {
  Container,
  List,
  Item,
  Picture,
  Name,
  Title,
  User,
} from "./styles/profiles"
type Props = {
  children?: React.ReactChild
  [x: string]: any
  src?: string
}
export default function Profiles({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }: Props) {
  return <Title {...restProps}>{children}</Title>
}

Profiles.Item = function ProfilesItem({ children, ...restProps }: Props) {
  return <Item {...restProps}>{children}</Item>
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }: Props) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  )
}

Profiles.Name = function ProfilesName({ children, ...restProps }: Props) {
  return <Name {...restProps}>{children}</Name>
}

Profiles.List = function ProfilesList({ children, ...restProps }: Props) {
  return <List {...restProps}>{children}</List>
}

Profiles.User = function ProfilesUser({ children, ...restProps }: Props) {
  return <Item {...restProps}>{children}</Item>
}
