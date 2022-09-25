import React, {useState} from "react";
import "../css/estiloCompontents.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDemocrat, faRepublican } from '@fortawesome/free-solid-svg-icons';
//import Celdas from "./celda";

const Board = ({nombreJug1}) => {
  
  return (
    <div className="row">
      <div className="col-md-12 contenedor-tabla">
        <h5 className="col-md-8 titleTable">Ahora es el turno de {nombreJug1}</h5>
        <table className="" id="table">
          <tbody>
          <tr id="tRow1">
            <td className="celdas"><FontAwesomeIcon icon={faDemocrat}/></td>
            <td className="celdas">Celda 2</td>
            <td className="celdas">Celda 3</td>
          </tr>
          <tr id="tRow2">
            <td className="celdas">Celda 4</td>
            <td className="celdas"><FontAwesomeIcon icon={faRepublican}/></td>
            <td className="celdas">Celda 6</td>
          </tr>
          <tr id="tRow3">
            <td className="celdas">Celda 7</td>
            <td className="celdas">Celda 8</td>
            <td className="celdas">Celda 9</td>
          </tr>
          </tbody>
        </table>       
      </div>
    </div>
    
  )
}

Board.propTypes = {
  nombreJug1: PropTypes.string
}



export default Board;
