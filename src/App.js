import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  
  const [squares, setSquares] = useState(Array(9).fill(null))
  
  // Use const player for later

  console.log(squares)

  // Use map to get 9 squares
  // Try to use filter to alternate x's & o's
  return (
    <div>
      <h1>Tic Tac Toe</h1>
        <div className = "gameboard">
          {squares.map((value, index) => {
            return <Square 
              value = {value}
              key = {index}
            />
          })}
        </div>
    </div>
  )
}

export default App