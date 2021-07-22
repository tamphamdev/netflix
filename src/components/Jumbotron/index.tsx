import React from "react";
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";

type Props = {
  direction: string;
  children: React.ReactNode;
};
export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}: Props) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}: Props) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }: Props) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }: Props) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...restProps
}: Props) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }: Props) {
  return <Image {...restProps} />;
};
