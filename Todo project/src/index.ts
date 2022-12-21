import {  v4 as uuidV4 } from 'uuid';
type newtasks = {
    id: string,
    title: string,
    completed: boolean,
    createdAt: Date,
   
}

const list = document.querySelector<HTMLUListElement>('#list');
const input = document.querySelector<HTMLInputElement>('#todo');
const add = document.getElementById("submit") as HTMLFormElement | null
const tasks: newtasks[] = LoadTaske()
tasks.forEach(function addListItem(el: newtasks)
{
    const item = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const dlt = document.createElement('button')
    dlt.innerText = "DELETE"
    dlt.addEventListener('click',function ()
    {
        Delete(el.title)
        console.log(el.title)
    })
    checkbox.addEventListener('change',() =>
    {
        el.completed = checkbox.checked
        saveTodos()

        console.log(el)
    })
    checkbox.type = 'checkbox'
    checkbox.checked = el.completed
    label.append(checkbox,el.title)
    item.append(label)
    list?.append(item,dlt)
})

add?.addEventListener('submit', e =>
{
    e.preventDefault();
    if (input?.value == "" || input?.value == null) return

    const task: newtasks = {
        id: uuidV4(),
        title: input.value,
        completed: false,
        createdAt: new Date(),
     
    }
    tasks.push(task)
    saveTodos()
    window.location.reload()
    
    input.value = ""
    
})

function saveTodos()
{
    localStorage.setItem('todo',JSON.stringify(tasks))
    
}

function LoadTaske():newtasks[]
{
    const todoJson = localStorage.getItem("todo")
    if(todoJson==null) return[]
   return JSON.parse(todoJson)
}

function Delete(title:string)
{
    let del = tasks.filter(
        function (e)
        {
            e.title != title;
        }
    )
    localStorage.setItem('todo',JSON.stringify(del))
    //window.location.reload()
   
}
//as we get return "any" from loadtaske function but you can just simple pass return type as ":newtasks[]"
//if we  are getting by id we have to follow this syntex
// ? is use for optiona changing as we discuss in basic o typescript
//handle "uuid" type error we can install another type/library for "uuid_module". Problem where you get that command its pretty easy just on "uuid" you can see there command
/*npm i --save-dev @types/uuid*/
//we got an error we have setting in pack use import and export but we no need so go in "tsconfig.json" file and comment out "isolatedModules":true file code.//
/* whne you make function with with "new" argument then you got a error.*/
// how you can deal with it?
// simple go to the "tsconfig.json" file and uncomment file "isolatedModules":true ;
//create a custom type for every key-value pair.
// addlistitem return void means nothing you getting in return.
//if you write return =true in last of function than you see it return boolean becasue typescript is very intelligent oh yeah!
//for store the todo list item we gonna make new empty array.