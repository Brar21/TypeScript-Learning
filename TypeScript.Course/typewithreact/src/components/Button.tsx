import React from 'react'
//interfaces or Type

interface ButtonProps
{
    text: string,
    paragraph: string,
    email?: string 
    //for optional if we dont' want to use a props we can simply use "?" after name prop.
}
const Button = ({text,paragraph,email}:ButtonProps) => {
    return (
      <>
      <div>{text}</div>
            <p>{paragraph}</p>
            <p>{email}</p>
            </>
  )
}

export default Button