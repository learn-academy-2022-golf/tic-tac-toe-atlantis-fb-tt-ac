import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [counter, setCounter] = useState(1)
  const [checkedClick, setCheckedClick] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ])

  const handleGamePlay = (index) => {
    let updatedSquares = [...squares]
    // conditional that checks for clicked status:
    // If it is true then 
    // Expected: Determine if a button has been clicked on
      // If it has, render nothing
      // If it it hasnt render counter function. 



      
    if(counter % 2 === 0 && !checkedClick[index]) {
        updatedSquares[index] = "🐢"
        setSquares(updatedSquares)
        setCounter(counter + 1)
        setCheckedClick[index] = true
      } else if (!checkedClick[index]) {
        updatedSquares[index] = "🌴"
        setSquares(updatedSquares)
        setCounter(counter + 1)
        setCheckedClick[index] = true
    }
}

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