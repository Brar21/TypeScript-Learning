import { v4 as uuidV4 } from "uuid";
type newtasks = {
    id: string,
    title: string,
    completed: boolean,
    createdAt:Date,
}

const list = document.querySelector<HTMLUnknownElement>("#list");
const input = document.querySelector<HTMLInputElement>("#todo");
const add = document.getElementById("submit") as HTMLFormElement | null
const tasks: newtasks[]=getBackTaks()
tasks.forEach(function addListItem(el: newtasks)
{
    const item = document.createElement("li");
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const dlt = document.createElement('button')
    dlt.innerText = "DELETE"
    dlt.addEventListener('click',function ()
    {
        Delete(el.id)
    })
    checkbox.addEventListener('change',() =>
    {
        el.completed = checkbox.checked
        console.log(el)
    saveToLocal()

    })
    checkbox.type = "checkbox"
    checkbox.checked=el.completed
    label.append(checkbox,el.title)
    item.append(label)
    list?.append(item,dlt)
})

add?.addEventListener('submit',e =>
{
    e.preventDefault();
    if (input?.value == "" || input?.value == null) return
    const task:newtasks = {
        id: uuidV4(),
        title: input.value,
        completed: false,
        createdAt:new Date()
    }
    tasks.push(task)
    saveToLocal()
    window.location.reload()
    input.value=""
})

console.log(tasks)

function saveToLocal()
{
    localStorage.setItem("Tasks",JSON.stringify(tasks))
}

function getBackTaks():newtasks[]
{
    const TodoJSON = localStorage.getItem("Tasks")
    if(TodoJSON==null) return []
  return  JSON.parse(TodoJSON)
}

function Delete(id: string)
{
    let del = tasks.filter(
        function (e)
        {
            return e.id!=id
        }
    )
    localStorage.setItem("Tasks",JSON.stringify(del))
    window.location.reload()
}