import React from 'react'
import { Todo } from '../App'
import TodoItems from './TodoItems'
type Prop = {
    data: Todo[]
    Delete:(id:Todo)=>void
}
const TodoList = ({data,Delete}:Prop) => {
  
  return (
      <div>
          {data.map(todo => <TodoItems todo={todo} Delete={Delete} />)}
    </div>
  )
}

export default TodoList