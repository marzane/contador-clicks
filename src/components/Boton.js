import React from "react";
import "../css/Boton.css";

function Boton({ texto, esBotonClick, manejarClick }) {
  return (
    <button 
      className={"boton-contador " + (esBotonClick ? "boton-click" : "boton-reset")}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Boton;