import { useState } from 'react'
import Board from './Board'

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [selected, setSelected] = useState(null)

  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    setSelected(null)
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove)
    setSelected(null)
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
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} selected={selected} onSelect={setSelected} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game