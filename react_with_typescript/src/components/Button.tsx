import React from 'react'

type ButtonProps={
    color: "red" | "blue" | "green",
    text: string,
    handleClick: ()=> void
}
const Button = (props:ButtonProps) => {
  return (
      <div>
          <button style={{backgroundColor:props.color}} onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

export default Button