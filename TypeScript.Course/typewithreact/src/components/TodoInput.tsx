import React, { useState } from 'react'
import Button from './Button'
//todo -->input
//todo submit --> button
type TodoProps = {
    
}
const TodoInput = (props: TodoProps) =>
{
    const [text,setText] = useState<string>("") //make generic hook
    const handleChange :React.ChangeEventHandler<HTMLInputElement> = (e) =>
    //"e" --> work as an "event"
    {
        setText(e.target.value)
    }
  return (
      <div className='todo'>
          <input className='todoinput' type="text" value={text} onChange={handleChange} />
          <Button text='ADD TODO'/>
    </div>
  )
}

export default TodoInput