import './App.css'
import React, {useState} from 'react';

function App() {
const [count, setCount] = useState(4)

function decrementCount (){
  setCount (previousCount => previousCount-1)
}

function increaseCount (){
  setCount (count+1)
}

  return (
    <>
    <button onClick={decrementCount}>-</button>
<span>{count}</span>   
 <button onClick={increaseCount}>+</button>
    </>
  )
}

export default App
