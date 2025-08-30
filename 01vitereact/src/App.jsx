import { useState } from 'react'
import Chai from "./chai"

function App() {
  //add js
  const username = "chai aur code" //{} inside return is used as varible: it is called evaluated expression we dont write js but js final o/p which is the evaluated output 
  return (
    // fragment 
    <> 
      <h1>chai aur react {username}</h1>
      <Chai />
      <p>test para</p>
    </>
  )
}

export default App
