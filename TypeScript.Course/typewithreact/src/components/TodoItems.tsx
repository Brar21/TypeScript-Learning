import React from 'react'
import { Todo } from '../App'
import { getData } from '../api/api'
import { idText } from 'typescript'
type Props = {
    todo: Todo
    Delete:(id:Todo)=>void
}
const TodoItems = ({todo,Delete}:Props) => {
    const {text}=todo
  return (
      <div>
          <h1>{text}</h1>
          <button onClick={()=>Delete(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItems