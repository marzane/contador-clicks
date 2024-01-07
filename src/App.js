import './App.css';
import logoFreeCodeCamp from "./img/freeCodeCamp.svg";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-freecodecamp-contenedor'>
        <img
          className='logo-freecodecamp'
          src={logoFreeCodeCamp}
          alt='logo-freecodecamp' />
      </div>
      <div className='contador-contenedor-principal'>
        <Contador
          numClicks={numClicks}
        />
        <div className='contenedor-botones'>
          <Boton
            texto="click"
            esBotonClick={true}
            manejarClick={manejarClick}
          />
          <Boton
            texto="reset"
            esBotonClick={false}
            manejarClick={reiniciarContador}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
