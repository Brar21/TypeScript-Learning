import React, { useState } from 'react'
//import Button from './Button'
//todo -->input
//todo submit --> button
type TodoProps = {
  handleAdd:(text:string)=>void  
}
const TodoInput = (props: TodoProps) =>
{
    const [text,setText] = useState<string>("") //make generic hook
    const handleChange :React.ChangeEventHandler<HTMLInputElement> = (e) =>
    //"e" --> work as an "event"
    {
        setText(e.target.value)
    }
    const handleClick:React.MouseEventHandler<HTMLButtonElement> = () =>
    {
        props.handleAdd(text)
     setText("")   
    }
  return (
      <div className='todo'>
          <input className='todoinput' placeholder='Add Todo...' type="text" value={text} onChange={handleChange} />
          {/*<Button text='ADD TODO' handleClick={handleClick}/>
          */}
          <button className='buttoncomponent' onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default TodoInput