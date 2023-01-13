import axios,{ AxiosResponse } from "axios";
import { Todo } from "../App";

export const getData = async () =>
{
    let res: AxiosResponse<Todo[]> = await axios.get(`http://localhost:8080/todos`)
    return res.data
}

export const postData = async (todo:Todo) =>
{
    let res: AxiosResponse<Todo> = await axios.post(`http://localhost:8080/todos`,todo)
    return res.data
}

export const DeletetData = async (todo:Todo) =>
{
    let res: AxiosResponse<Todo> = await axios.post(`http://localhost:8080/todos`,{
        ...todo
    })
    return res.data
}
