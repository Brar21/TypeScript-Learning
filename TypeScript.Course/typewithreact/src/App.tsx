import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import TodoInput from './components/TodoInput';

interface Todo
{
    id: number,
    text:string
}

function App()
{
    const [value,setValue] = useState<number>(0);
    const [todo,setTodo]=useState<Todo[]>([])
    const handleAdd = (text:string) =>
    {
        const todoItem: Todo = {
            id: Date.now(),
            text,
        }
        setTodo(
            [...todo,todoItem]
        )
        
    }
    console.log(todo)
  return (
    <div className="App">
          <header className="App-header">
              <h1>Todo Input</h1>
              <TodoInput handleAdd={handleAdd} />
              
              {/*<p>{todo}</p>*/}
              <hr />
              <h1>Counter : {value}</h1>
              <div>     
                  <Button
                      text="Add"
                      disabled={value === 20}
                      handleClick={() => setValue(value + 1)} />
       &nbsp;
       &nbsp;
       &nbsp;
                  <Button
                      text="Minus"
                      disabled={value === 0}
                      handleClick={() => setValue(value - 1)} />
              
              </div>
      </header>
    </div>
  );
}

export default App;
