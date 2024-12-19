import { useState, useEffect } from 'react';
import './App.css';
import Users from "./views/Users"




const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100)
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCounter)=> prevCounter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter)=> prevCounter + 1)}>+</button>
    </div>
  );
}

export default App;
