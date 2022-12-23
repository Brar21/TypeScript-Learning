import React from 'react'

type ButtonProps={
    color: "red" | "blue" | "green",
    text:string
}
const Button = (props:ButtonProps) => {
  return (
      <div>
          <button style={{backgroundColor:props.color}}>{props.text}</button>
    </div>
  )
}

export default Button