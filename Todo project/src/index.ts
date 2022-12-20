import { v4 as uuidV4 } from 'uuid';
const list = document.querySelector<HTMLUListElement>('#list');
const input = document.querySelector<HTMLInputElement>('#todo');
const add = document.getElementById("#submit") as HTMLFormElement | null //if we  are getting by id we have to follow this syntex

add?.addEventListener('submit',e =>
{
    e.preventDefault();
    if (input?.value == "" || input?.value == null) return // ? is use for optiona changing as we discuss in basic o typescript

    const task = {
        id: uuidV4(),
        title:input.value,
        completed: false,
        createdAt:new Date()
    }
    
})
//handle "uuid" type error we can install another type/library for "uuid_module". Problem where you get that command its pretty easy just on "uuid" you can see there command
/*npm i --save-dev @types/uuid*/
//we got an error we have setting in pack use import and export but we no need so go in "tsconfig.json" file and comment out "isolatedModules":true file code.//