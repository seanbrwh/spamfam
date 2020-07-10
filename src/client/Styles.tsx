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

.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-2 {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.card-3 {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.card-4 {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-5 {
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

`;
