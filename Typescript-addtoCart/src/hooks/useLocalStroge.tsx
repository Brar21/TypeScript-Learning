import { useEffect, useState } from "react";


export function useLocalStroge<T>(key:string,initalValue:T | (()=>T))
{
    const [value,setValue] = useState(() =>
    {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if (typeof initalValue === "function")
        {
            return (initalValue as ()=>T)()
        } else
        {
           return initalValue
        }
    })
    useEffect(() =>
    {
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    return [value,setValue] as [typeof value, typeof setValue]
}