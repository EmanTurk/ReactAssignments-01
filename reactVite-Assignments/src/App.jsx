import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='box1'>
        <div className='box2'>
            <div className='box3'>
              <div className='box4'></div>
              <div className='box4' id='box42'></div>
            </div>
        </div>

      </div>
      </div>
  )
}

export default App
