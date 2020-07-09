import React from "react";
import Navbar from "../components/Navbar";
import { useCss } from "kremling";

export default function Home() {
  const scope = useCss(css);
  return (
    <div {...scope}>
      <Navbar />
      <div className="container">
        <h1> Welcome to SpamFam </h1>
      </div>
    </div>
  );
}

const css = `
  
`;
