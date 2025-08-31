import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15 ) //hook responsible for change in state in dom (change != value update) the change is propagate into UI/DOM
  //counter is the 0th index and setCounter is the fnc res to update the counter

  // let counter = 15

  //fnc and ref value of fnc is in onClick={addValue}
  const addValue = () => {
    // console.log("clicked", counter);
    // counter += 1
    setCounter(counter + 1)

  }

  const removeValue = () =>{
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>remove value {counter}</button>

    </>
  )
}

export default App
