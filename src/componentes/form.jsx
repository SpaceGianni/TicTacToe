import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDemocrat, faRepublican } from "@fortawesome/free-solid-svg-icons";

//Definicion del compotente
const Form = ({ obtenerNombre, obtenerNombre2, eleccionSimboloDem, eleccionSimboloRep, onSubmit  }) => {



  // Funcion para renderizar la proxima vista board
// 1. asegurarse de obtener los tres valores que se requieren
// 2. si eso es verdadero, entonces, renderizar Board

  return (
    <div className="container justify-content-center">
      <h1 className="text-center mt-4" id="h1Form">
        TicTacToe o #Gato con React
      </h1>
      <p className="fs-5" id="pForm">
        Escribe el nombre de los jugadores y elije tu símbolo <br /> El jugador
        1 inicia el juego
      </p>

      <form>
        <div className="contenedor-inputs col">
          <div className="row gx-5">
            <div className="col">
              <input
                type="text"
                name="name"
                id="Jug1"
                placeholder="Nombre jugador 1"
                onBlur={obtenerNombre}
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="name2"
                id="Jug2"
                placeholder="Nombre jugador 2"
                onBlur={obtenerNombre2}
              />
            </div>
          </div>
        </div>

        <div className="divContenedorForm col-6">
          <button
            onClick={(e) => eleccionSimboloDem(e)}
            className="fs-1"
            id="btnDem"
          >
            {" "}
            <FontAwesomeIcon icon={faDemocrat} />
          </button>
          <button
            onClick={(e) => eleccionSimboloRep (e)}
            className="fs-1"
            id="btnRep"
          >
            <FontAwesomeIcon icon={faRepublican} />
          </button>
        </div>

        <button onSubmit={onSubmit} type="submit" className="btn btn-lg" id="BtnForm">
          Enviar
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  //obtenerNombre: PropTypes.func.isRequired,
  //obtenerNombre2: PropTypes.func.isRequired,
  eleccionSimboloDem: PropTypes.func,
  eleccionSimboloRep: PropTypes.func,
  onSubmit: PropTypes.func.isRequired
}
  

export default Form;
