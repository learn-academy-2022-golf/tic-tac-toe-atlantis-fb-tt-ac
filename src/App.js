import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [counter, setCounter] = useState(1)
  const [players, setPlayers] = useState(1)
  
  const handleGamePlay = (index, value) => {
    let updatedSquares = [...squares]
    
    if(players === 1 && !squares[index]) {
      updatedSquares[index] = "x"
      setSquares(updatedSquares)
      setPlayers(2)
      if (checkWinningPatterns == true) {
        alert(`${players} has won!`)
      }
    // 
    } else if (players === 2 && !squares[index]){
      updatedSquares[index] = "o"
      setSquares(updatedSquares)
      setPlayers(1)
      if (checkWinningPatterns == true) {
        alert(`${players} has won!`)
      }
  }
}
const checkWinningPatterns = () => {
  if (squares[0] == "x") {
    alert(`${players} has won!`)
  }
}


const winningPatterns = [
  [0, 1, 2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

  console.log(squares)


  return (
      <>
      <h1>Tic Tac Toe</h1>
      <div className = "gameboard">

        {squares.map( (value, index) => {

            return (
              <Square 
                value={value} 
                key={index} 
                index={index}
                handleGamePlay={handleGamePlay}
              />

          
            )
        })}

      </div>
      


    </>

  )
}

export default App