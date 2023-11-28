import { useState } from 'react'
import './App.css'
import Button from './button';

function App() {
  return (
    //render twice= use it twice here/
    <div className='container'>
      <Button text="Important" isBold={true} />
      <Button text="Not Important" isBold={false} />
    </div>
  );
}

export default App
