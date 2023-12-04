import { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="box">
        <button onClick={toggleVisibility}>Show/Hide</button>
        {isVisible && <div className="innerBox"></div>}
      </div>
    </>
  );
}

export default App;
