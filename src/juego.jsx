import React, { useState } from "react";
import "./css/estiloCompontents.css";
import Board from "./componentes/board";
import Form from "./componentes/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDemocrat, faRepublican } from "@fortawesome/free-solid-svg-icons";

const Juego = () => {
  const [nombreJug1, setNombreJug1] = useState(null); //Hook para guardar nombre jugador 1
  const [nombreJug2, setNombreJug2] = useState(null); //Hook para guardar nombre jugador 2
  const [partido, setPartido] = useState(null); //Hook para guardar la elección del simbolo que hace el primer jugador
  const [PD, setPD] = useState(<FontAwesomeIcon icon={faDemocrat} />) // guarda el componente 1
  const [PR, setPR] = useState(<FontAwesomeIcon icon={ faRepublican} />) //guarda el componente 2
  
 ///OBTENCIÓN DE LOS NOMBRES DE LOS JUGADORES
  //Función para obtener el nombre del jugador 1
  const obtenerNombre = (e) => {
    e.preventDefault();
    let nombre1 = e.target.value;
    console.log(nombre1);
    setNombreJug1(nombre1);
    //console.log(nombreJug1);
  };

  //Función para obtener el nombre del jugador 2
  const obtenerNombre2 = (e) => {
    e.preventDefault();
    let nombre2 = e.target.value;
    console.log(nombre2);
    setNombreJug2(nombre2);
    //console.log(nombreJug2);
  };

  //ELECCIÓN DEL SIMBOLO
  //Función que indica que se eligió el simbolo del partido democrata
  const eleccionSimboloDem = (e) => {
    e.preventDefault();
    setPartido(PD);
   
  };

  //Función que indica que se eligió el simbolo del partido republicano
  const eleccionSimboloRep = (e) => {
    e.preventDefault();
    setPartido(PR);
    
  };
  //Elección simbolo
  //console.log(partido);
 

  const [cambiarVista, setCambiarVista] = useState(false); //Hook para cambiar de vista. Se inicializa en false
  const onSubmit = (e)=>{
    e.preventDefault();
    setCambiarVista(true);
  }

  return (
    <>
      
      {!cambiarVista && <Form onBlur={[obtenerNombre, obtenerNombre2]} onClick={[eleccionSimboloDem, eleccionSimboloRep]} onSubmit={onSubmit}/>}
      {cambiarVista && <Board nombreJug1={nombreJug1} nombreJug2={nombreJug2} partido={partido} setPartido={setPartido} PD={PD} PR={PR}/>}
      
    </>
  );
};

export default Juego;
