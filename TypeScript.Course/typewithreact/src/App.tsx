import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Button text="CLick ME" paragraph='Hello i am button' email='varinder@gmail.com'/>
      </header>
    </div>
  );
}

export default App;
