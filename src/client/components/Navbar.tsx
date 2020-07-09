import React from "react";
import { useCss } from "kremling";

export default function Navbar() {
  const scope = useCss(css);
  return (
    <header {...scope}>
      <nav>
        <ul>
          <li>features</li>
          <li>pricing</li>
          <li>faq</li>
          <li>blog</li>
        </ul>
        <div className="container">
          <div>
            <button>Login</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

const css = `
& header{
    width:100%;
    height:7rem;
    background: var(--light-gray);
    color: var(--very-dark-gray);
    padding:0;
    margin:0;
    display:flex;
    justify-content:flex-end;
    align-items:center;    
    text-transform:uppercase;
}
& nav{
    padding:0 1rem;
    display:flex;
}
& ul{
    display:flex;
    list-style-type:none;
}
& li{
    padding:0 .5rem;
}
& button{
    width:10rem;
    height:50%;
    margin:0 .5rem;
}
& button:hover{
    background:lightblue;
    color:var(--ligth-gray)
}
.container{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
}
`;
