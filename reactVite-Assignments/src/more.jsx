import React from 'react';
import Box from './App'; 
import './App.css'

function App() {
  return (
    <div>
      <Box size="small" delay={1000} />
      <Box size="medium" delay={2000} />
      <Box size="large" delay={3000} />
    </div>
  );
}

export default App;
