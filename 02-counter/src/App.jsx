import {useState} from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState (15) 

  // let counter = 5

  const addValue = () => {
    console.log("Clicked",counter);
    setCounter(counter + 1)
  }

  const subtractValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur React </h1>
      <h2>Counter value: {counter} </h2>

      <button onClick = {addValue}>Increment</button>
      <br />
      <button onClick = {subtractValue}>Decrement</button>
    </>
  )
}

export default App
