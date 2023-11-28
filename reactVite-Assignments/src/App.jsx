import { useState } from 'react'
import "./App.css";
import img1 from '../src/assets/icon01.jpeg'
import img2 from './assets/Mario Star Pixel  - PngFind.jpeg'
import img3 from './assets/Hello kitty pixel art.jpeg'

import Cards from './card';

function App() {
  return (
    <>
   <div className="container">
      <Cards 
        image = {img1} 
        title="Star" 
        description = "This is a pixel image of the star in Mario" 
        link="https://motion.page/academy/" 
      />
      <Cards 
        image={img2}
        title="Hello Kitty" 
        description="Ever saw a kitty with muscles?" 
        link="https://motion.page/academy/" 
      />
      <Cards 
        image= {img3}
        title="Mushroom" 
        description="Mushrooms from different dimention ha" 
        link="https://motion.page/academy/" 
      />
    </div>
    </>
  );
}

export default App;
