import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App()
{
    const [value,setValue]=useState<number>(0)
  return (
    <div className="App">
          <header className="App-header">
              <h1>Counter : {value}</h1>
              <div>     
              <Button text="Add" handleClick={() => setValue(value + 1)} />
       &nbsp;
       &nbsp;
       &nbsp;
                  <Button text="Minus" handleClick={() => setValue(value - 1)} />
              
              </div>
      </header>
    </div>
  );
}

export default App;
