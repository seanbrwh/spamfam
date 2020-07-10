import React, { useState } from "react";
import { useCss, toggle } from "kremling";

type ModalProps = {
  children: JSX.Element | JSX.Element[];
  show: boolean;
  handleClose: () => void;
};

export default function Modal({ children, show, handleClose }: ModalProps) {
  const scope = useCss(css);

  function onCloseKey(e: any) {
    if (e.keyCode === 27) {
      handleClose();
    }
  }

  return (
    <div {...scope}>
      {show && (
        <div
          className="mod-container"
          onKeyDown={(e) => onCloseKey(e)}
          tabIndex={0}
        >
          <div
            className="modal card-4"
            onKeyDown={(e) => onCloseKey(e)}
            tabIndex={1}
          >
            {children}
          </div>
          <button id="close" onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
const css = `
.mod-container {
    width:100%;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:column;
    background:rgba(50,50,50,.7);
}
.modal{
  width:25%;
  height:75%;
  background:var(--very-dark-gray);
  color:var(--light-gray);
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  border-radius:4px;
  margin:0
}
#close{
  width:25%;
  height:5rem;
  margin:0;
}
`;
