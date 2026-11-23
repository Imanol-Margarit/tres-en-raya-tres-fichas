// TODO (preparación): copia aquí tu Board de la parte 1 y después modifícalo.

// TODO (paso 1): constante MAX_FICHAS = 3

// Props nuevas que recibirá Board (paso 2):
//   selected -> posición de la ficha elegida para mover, o null
//   onSelect -> función para cambiar la ficha elegida
import Square from './Square'
import { calculateWinner } from '../utils/calculateWinner';

function Board({xIsNext, squares, onPlay}) {
  // TODO (paso 1): valores derivados
  //   - jugador: 'X' u 'O' según el turno
  //   - fichasJugador: cuántas fichas tiene ese jugador en el tablero
  //   - faseMover: true si ya tiene MAX_FICHAS

  // TODO (paso 2): handleClick(i) con dos fases
  //   Fase colocar -> igual que en la parte 1
  //   Fase mover   -> 1) pulsar una ficha propia la selecciona (o la deselecciona)
  //                   2) con una ficha elegida, pulsar una casilla vacía la mueve:
  //                      copia del tablero, null en el origen, jugador en el destino

  // TODO (paso 4): texto de estado según la fase
  //   "Turno de X: coloca una ficha"
  //   "Turno de X: elige una de tus fichas para moverla"
  //   "Turno de X: elige una casilla vacía"
  const winner = calculateWinner(squares);
  
  function handleClick(i){
    if(squares[i] || winner){
      return;
    }
    const copia = squares.slice()
    copia[i] = xIsNext ? 'X' : 'O';
    onPlay(copia)
  }

  let status;
  if(winner){
    status = "Ganador: " + winner
  }else{
    status = "Siguiente jugador: " + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default Board