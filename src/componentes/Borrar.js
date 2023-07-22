import React from "react";
import '../hojas-estilos/Borrar.css'

const Borrar = (props) => (
    <div className='boton-borrar' 
        onClick={props.botonBorrar}>
        {props.children}
    </div>
);

export default Borrar;