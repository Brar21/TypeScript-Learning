import React, { useEffect, useState } from 'react';
import { DeletetData, getData, postData } from './api/api';
import './App.css';
import Button from './components/Button';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export interface Todo
{
    id: number,
    text:string
}

function App()
{
    const [value,setValue] = useState<number>(0);
    const [todo,setTodo] = useState<Todo[]>([])
    
    useEffect(() =>
    {
        handlegetTodo()
    },[])
    const handlegetTodo = () =>
    {
        getData()
            .then(res =>
            {
            setTodo(res)
        })
    }
    const handleAdd = (text:string) =>
    {
        const todoItem: Todo = {
            id: Date.now(),
            text,
        }
        postData(todoItem)
            .then(kuchbi =>
            {
            handlegetTodo()
        })
        
    }
    const Delete = (id:number) =>
    {
      let newList=  todo.filter(
            function (e)
            {
                return e.id!=id
            }
        )
        setTodo(newList)
        handlegetTodo()
    }
    console.log(todo)
  return (
    <div className="App">
          <header className="App-header">
              <h1>Todo Input</h1>
              <TodoInput handleAdd={handleAdd} />
              <TodoList data={todo} Delete={Delete}/>
            
          
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
