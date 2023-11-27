import { useState } from 'react'
import './App.css'
import Question1 from './question1';
import Q1Input from './input';
import Q2Input from './q2input'
import Q2 from './question2'



function App() {
  return (
    <>
    <div className='container'>
    <h1 className='header'>How Do You Like front End?</h1>
    <Question1 />
    <Q1Input />
    <Q2 />
    <Q2Input />
  

    </div>
    </>
  )
}

export default App
