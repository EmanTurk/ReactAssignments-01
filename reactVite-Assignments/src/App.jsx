import { BrowserRouter} from 'react-router-dom'
import React from 'react';
import { Route, Routes  } from "react-router-dom";
import { Home } from './Home';
import './home.css'
import { Products } from './products';

function App(){
    return (
    <Routes>
<Route path="/" element={ <Home />}/>
<Route path="/product" element={ <Products />}/>



    </Routes>
    
    )};

  

export default App;
