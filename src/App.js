import './App.css';
import logoFreeCodeCamp from "./img/freeCodeCamp.svg";
import Boton from "./components/Boton.js";

function App() {

  function manejarClick(){
    console.log("click");
  }

  function reiniciarContador(){
    console.log("reiniciar");
  }

  return (
    <div className="App">
      <div className='logo-freecodecamp-contenedor'>
        <img 
          className='logo-freecodecamp'
          src={logoFreeCodeCamp}
          alt='logo-freecodecamp'/>
      </div>
      <div className='contador-contenedor-principal'>

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
