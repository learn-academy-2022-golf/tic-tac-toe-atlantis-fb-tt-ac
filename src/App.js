import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [counter, setCounter] = useState(1)
  const [players, setPlayers] = useState("x")
  
  const handleGamePlay = (index, value) => {
    let updatedSquares = [...squares]
    
    if(counter % 2 === 0 && !squares[index]) {
      updatedSquares[index] = "🐢"
      setSquares(updatedSquares)
      setCounter(counter + 1)
    // 
    } else if (!squares[index]){
      updatedSquares[index] = "🌴"
      setSquares(updatedSquares)
      setCounter(counter + 1)
  }
}


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