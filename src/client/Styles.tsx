import React from "react";
import { useCss } from "kremling";

type StylesProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Styles(props: StylesProps) {
  const scope = useCss(css);
  return <div {...scope}>{props.children}</div>;
}

const css = `
:root {
  font-size: 62.5%;
  font-family: 'Montserrat', sans-serif;
  background-color: #efefef;
  --very-light-gray: #F3F3F3;
  --light-gray: #dfdfdf;
  --medium-gray: #afafaf;
  --very-dark-gray: #3C464D;
}
:root * {
  box-sizing: border-box;
}
body {
  font-size: 1.8rem;
  margin: 0;
}

& button.unstyled {
  display: block;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  border-radius: 0;
  background: transparent;
  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;
  /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
  line-height: normal;
  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  /* Corrects inability to style clickable input types in iOS */
  -webkit-appearance: none;
}
& button.unstyled::moz-focus-inner {
  border: 0;
  padding: 0;
}
& button {
  font-size: 1.8rem;
  border-radius: .6rem;
  padding: .8rem 1.2rem;
  border: none;
  text-align: center;
}
& button.icon {
  padding: .8rem;
  margin: .4rem;
  background-color: transparent;
  border-radius: .6rem;
}
& button.icon:hover {
  background-color: #e9e9e9;
}
& button.icon.active, & .button.icon.active:hover {
  background-color: var(--medium-gray);
}
& button.icon img {
  width: 1.6rem;
  height: 1.6rem;
}
& button + button, & button + a.button, & a.button + button, & a.button + a.button {
  margin-left: 1.6rem;
}
& button.primary, & a.primary {
  background-color: #2f4858;
  color: white;
  transition: background-color .2s;
}
& a.button {
  font-size: 1.8rem;
  border-radius: .6rem;
  padding: .8rem 1.2rem;
  border: none;
  text-align: center;
  text-decoration: none;
}
& button.primary:hover, & a.button.primary:hover {
  background-color: #507b97;
}
& button.secondary, & a.button.secondary {
  background-color: #e9e9e9;
  color: black;
  transition: background-color .2s;
}
& button.secondary:hover, & a.button.secondary:hover {
  background-color: #afafaf;
}
`;
