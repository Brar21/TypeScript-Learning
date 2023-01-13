import React from 'react'
import { Todo } from '../App'
import { DeletetData } from '../api/api'
type Props = {
    todo: Todo
    Delete:(id:Todo)=>void
}
const TodoItems = ({todo,Delete}:Props) => {
    const {text}=todo
  return (
      <div>
          <h1>{text}</h1>
          <button onClick={()=>Delete(id)}>Delete</button>
    </div>
  )
}

export default TodoItems