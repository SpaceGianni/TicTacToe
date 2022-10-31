import React, { useState } from "react";
import "../css/estiloCompontents.css";
import PropTypes from "prop-types";


const Board = ({ nombreJug1, nombreJug2,partido,PD, PR }) => {
  const [jugadora, setJugadora] = useState(nombreJug1 ); 
  const [jugadas, setJugadas] = useState(
    // variable con array que guarda las jugadas
    [null, null, null, null, null, null, null, null, null]
  );
  const [turno, setTurno] = useState(partido); //variable que guarda los turnos
  console.log("eleccion del simbolo: ", partido);

  const [hayGanador, setHayGanador] = useState(false); //boleano para saber si hay un ganador
  const [hayEmpate, setHayEmpate] = useState(false); // boleano para saber si hay un empate

  const capturarJugada = (index, turno) => {
    //console.log(index, turno)
    if (turno !== null) { //condición inicial para poder jugar
      turno === PD //cambio de turno
        ? setTurno(PR)
        : setTurno(PD); 
    if(jugadora!== null){
      jugadora === nombreJug1 ? setJugadora(nombreJug2) : setJugadora (nombreJug1)
    }
      let celdas = [...jugadas]; //copiamos  el array de jugadas para manipularlo
      celdas[index] = turno;
      setJugadas(celdas);
      checkWinner(celdas); //función que indica si hay un ganador
      checkEmpate(celdas); //función que indica si hay un empate
      
    }
  };
  console.log("jugadas", jugadas);


  //Array con jugadas ganadoras
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //Función para corroborar si hay un ganador
  const checkWinner = (celdas) => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (celdas[a] && celdas[a] === celdas[b] && celdas[a] === celdas[c]) {
        setTurno(null); // esto termina el juego
        setHayGanador(true);
        console.log("hay un nagador@");
      }
    }
  };

  //Función para corroborar si hay un empate
  const checkEmpate = (celdas) => {
    if (!celdas.includes(null)) {
      setTurno(null); //esto termina el juego
      setHayEmpate(true);
      console.log("empate");
    }
  };

  //Función para reiniciar el juego
  const reiniciar = (e) => {
    e.preventDefault();
    window.location.reload();
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12 contenedor-tabla">         
          {hayEmpate ?  
          <>
          <h3 className="col-md-8 titleTable">
              ¡ Hay un EMPATE !
          </h3> <br/>
          <button type="reset" className="btn btn-lg" id="btn-empate" onClick={(e)=> reiniciar(e)}>Reiniciar juego</button>
          </>
          : 
          hayGanador ? 
          <>
          <h3 className="col-md-8 titleTable">
              ¡ {jugadora} ganó el juego!
          </h3> <br/>
          <button className="btn btn-lg" id="btn-reiniciar" onClick={(e)=> reiniciar(e)}>Reiniciar juego</button>
          </>
          : <h5 className="col-md-8 titleTable">
            Ahora es el turno de {jugadora}
          </h5>
          
          }
          
          <div className="tablero" id="table">
            {jugadas.map((jugada, index) => {
              return (
                <div
                  className="celda"
                  key={index + index + 1}
                  onClick={() => capturarJugada(index, turno)}
                >
                 {jugada}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

Board.propTypes = {
  nombreJug1: PropTypes.string,
};

export default Board;
