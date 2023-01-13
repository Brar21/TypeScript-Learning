import React from 'react'
//interfaces or Type

interface ButtonProps
{
    text: string,
    handleClick:()=>void
    //for optional if we dont' want to use a props we can simply use "?" after name prop.
}
const Button = ({text,handleClick}:ButtonProps) => {
    return (
      <>
      <button className='buttoncomponent' onClick={handleClick}>{text}</button>
           
            </>
  )
}

export default Button