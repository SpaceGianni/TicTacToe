import React, { useState } from "react";
import "../src/css/estiloCompontents.css";
import Board from "../src/componentes/board";
import Form from "../src/componentes/form";

const Juego = () => {
  const [nombreJug1, setNombreJug1] = useState(null); //Hook para guardar nombre jugador 1
  const [nombreJug2, setNombreJug2] = useState(null); //Hook para guardar nombre jugador 2

  //Funcion para obtener el nuombre del jugador 1
  const obtenerNombre = (e) => {
    e.preventDefault();
    let nombre1 = e.target.value;
    setNombreJug1(nombre1);
    console.log(nombreJug1);
  };

  //Función para obtener el nuombre del jugador 2
  const obtenerNombre2 = (e) => {
    e.preventDefault();
    let nombre2 = e.target.value;
    setNombreJug2(nombre2);
    console.log(nombreJug2);
  };

  //Función que indica que se eligió el simbolo del partido democrata
  const eleccionSimboloDem = (e) => {
    e.preventDefault();
    console.log("Eleccion partido democrata");
  };

  //Función que indica que se eligió el simbolo del partido republicano
  const eleccionSimboloRep = (e) => {
    e.preventDefault();
    console.log("Eleccion partido republicano");
  };

  const [cambiarVista, setCambiarVista] = useState(false); //Hook para cambiar de vista. Se inicializa en false
  const onSubmit = ()=>{
    setCambiarVista(true);
  }

  return (
    <>
      <Form onBlur={[obtenerNombre, obtenerNombre2]} onClick={[eleccionSimboloDem, eleccionSimboloRep]} onSubmit={onSubmit}/>
      
      {cambiarVista && <Board nombreJug1={nombreJug1}/>}
    </>
  );
};

export default Juego;
