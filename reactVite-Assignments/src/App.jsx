import { useState } from 'react';
import './App.css'

function App() {
const [count, setCount] = useState (0)

function increaseCount (){
setCount(previousCount => previousCount +1)
}

  return (
    <>
      <button  onClick={increaseCount}>Increment</button>
      <span>{count}</span>
    </>
  )
}

export default App
