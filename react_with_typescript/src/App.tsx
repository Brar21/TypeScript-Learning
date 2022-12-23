import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App()
{
    const [text,setText]=useState<string>("")
  return (
    <div className="App">
          <Button color='red' text='RED' handleClick={()=>setText("Button color is RED")}/>
          <Button color='blue' text='BLUE' handleClick={() => setText("Button color is BLUE")} />
          <Button color='green' text='GREEN' handleClick={() => setText("Button color is GREEN")} />
          {text}
    </div>
  );
}

export default App;
