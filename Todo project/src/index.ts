import { v4 as uuidV4 } from 'uuid';
type newtask={ id: string,title: string,completed: boolean,createdAt: Date }
const list = document.querySelector<HTMLUListElement>('#list');
const input = document.querySelector<HTMLInputElement>('#todo');
const add = document.getElementById("#submit") as HTMLFormElement | null //if we  are getting by id we have to follow this syntex
const tasks:newtask[]=[]
add?.addEventListener('submit',e =>
{
    e.preventDefault();
    if (input?.value == "" || input?.value == null) return // ? is use for optiona changing as we discuss in basic o typescript

    const task:newtask = {
        id: uuidV4(),
        title: input.value,
        completed: false,
        createdAt: new Date()
    }
tasks.push(task)
    addListItem(task)
    input.value=""
})

function addListItem(newtask: newtask )
{
    const item = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input')
    checkbox.addEventListener('change',() =>
    {
        newtask.completed = checkbox.checked
        console.log(newtask)
    })
    checkbox.type = 'checkbox';
    checkbox.checked=newtask.completed
    label.append(checkbox,newtask.title);
    item.append(label);
    list?.append(item)

}
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