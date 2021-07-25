import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Text,
  Title,
  Break,
} from "./styles/footer";

type Props = {
  children?: React.ReactNode;
};

export default function Footer({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }: Props) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }: Props) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }: Props) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }: Props) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }: Props) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }: Props) {
  return <Break {...restProps}>{children}</Break>;
};
