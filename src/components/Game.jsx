import { useState } from 'react'
import Board from './Board'

function Game() {
  // TODO (paso 2): nuevo estado "selected" (empieza en null).
  //   No forma parte del historial: elegir una ficha no es una jugada.

  // TODO (paso 2): handlePlay y jumpTo deben dejar "selected" a null
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)

  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove)
  }

  const moves = history.map((_, move) => {
    let description
    if (move > 0) {
      description = 'Ir al movimiento #' + move
    } else {
      description = 'Ir al inicio de la partida'
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        {/* TODO (paso 2): pasa también selected y onSelect */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game