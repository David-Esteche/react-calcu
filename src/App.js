
import './App.css';
import reactlogo from './img/reactlogo.png';
import Button from './componentes/Button';
import Pantalla from './componentes/Pantalla';
import Borrar from './componentes/Borrar';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import swal from 'sweetalert';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const CalcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      swal ( "Oops" ,  "Something went wrong!" ,  "error" );
    }
  };

  return (
    <div className='App'>
      <div className='Logo-react-contenedor'>
          <img  className='logo-react' alt='logo'
            src = {reactlogo} />
      </div>
      <div className='container-calculator'>
        <Pantalla input={input}/>
            <div className='fila'>
              <Button manejarClic={agregarInput}>7</Button>
              <Button manejarClic={agregarInput}>8</Button>
              <Button manejarClic={agregarInput}>9</Button>
              <Button manejarClic={agregarInput}>*</Button>
            </div>
            <div className='fila'>
              <Button manejarClic={agregarInput}>4</Button>
              <Button manejarClic={agregarInput}>5</Button>
              <Button manejarClic={agregarInput}>6</Button>
              <Button manejarClic={agregarInput}>-</Button>
            </div>
            <div className='fila'>
              <Button manejarClic={agregarInput}>1</Button>
              <Button manejarClic={agregarInput}>2</Button>
              <Button manejarClic={agregarInput}>3</Button>
              <Button manejarClic={agregarInput}>+</Button>
            </div>
            <div className='fila'>
              <Button manejarClic={CalcularResultado}>=</Button>
              <Button manejarClic={agregarInput}>0</Button>
              <Button manejarClic={agregarInput}>.</Button>
              <Button manejarClic={agregarInput}>/</Button>
            </div>
            <div className='fila'>
              <Borrar botonBorrar={() => setInput('')}>
                Borrar
              </Borrar>
            </div>
      </div>
    </div>
  );
}

export default App;
