import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "bibek",
    age: 21
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      {/* <Card channel="chaiaurcode" someObje = {newArr} /> */}
      <Card username="chaiaurcode" btnText="Click Me"/>
      <Card username="Bibek"/>
    </>
  )
}

export default App
//props: makes component reusable: when a cart made keep it in component and keep resuse it.
//Generally we keep html, css, js in specifically based on tech. 
// Reacts says instead of segregating based on technologies but segregate on the basis of what it work and what written inside. eg. like a card in order to reuse it put all html,css,js inside it so that when we pass a value inside it the card changes. 



//props: value can be send from one component to another with porps access eg card prop pass here and handle it in component