function Square({ value, onSquareClick, seleccionada }) {
  let className = 'square'
  if(seleccionada){
    className += ' seleccionada'
  }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square
