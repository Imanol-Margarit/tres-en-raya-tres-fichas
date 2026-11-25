import Square from './Square'
import { calculateWinner } from '../utils/calculateWinner';

const MAX_FICHAS = 3;

function Board({xIsNext, squares, onPlay, selected, onSelect}) {
  // TODO (paso 4): texto de estado según la fase
  //   "Turno de X: coloca una ficha"
  //   "Turno de X: elige una de tus fichas para moverla"
  //   "Turno de X: elige una casilla vacía"
  const winner = calculateWinner(squares);

  const jugador = xIsNext ? 'X' : 'O'
  const fichasJugador = squares.filter((casilla) => casilla === jugador).length
  const faseMover = fichasJugador >= MAX_FICHAS

  let status
  if (winner) {
    status = 'Ganador: ' + winner
  } else if (!faseMover) {
    status = 'Turno de ' + jugador + ': coloca una ficha'
  } else if (selected === null) {
    status = 'Turno de ' + jugador + ': elige una de tus fichas para moverla'
  } else {
    status = 'Turno de ' + jugador + ': elige una casilla vacía'
  }

  function handleClick(i){
    if(winner){
      return;
    }
    if(!faseMover){
      if(squares[i]){
        return
      }
      const copia = squares.slice()
      copia[i] = jugador
      onPlay(copia)
      return
    }

    if (squares[i] === jugador) {
      onSelect(selected === i ? null : i)
      return
    }

    if (selected !== null && squares[i] === null) {
      const copia = squares.slice()
      copia[selected] = null
      copia[i] = jugador
      onPlay(copia)
    }
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} seleccionada={selected === 0} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} seleccionada={selected === 1} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} seleccionada={selected === 2} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} seleccionada={selected === 3} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} seleccionada={selected === 4} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} seleccionada={selected === 5} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} seleccionada={selected === 6} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} seleccionada={selected === 7} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} seleccionada={selected === 8} />
      </div>
    </>
  )
}

export default Board