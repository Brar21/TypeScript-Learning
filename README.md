# TypeScript-Learning
TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript

## Steps for intiate 
 ``` npm i -g typescript ```  
 
 <!--//First step to install gobally in your system you can every where or every Project-->
 - for verfiy or check version 
 ``` npm tsc -v ``` 

 # Start Type first TypeScript Program
    
 <!--for make Js(javascript) file just open terminal and use command -->
 - Just for convert Ts(typescript) file into Js(javascript) file use command 
   
   <!--Prefer use cmd(Command Prompt) rather than Powershell-->

 ``` tsc index.ts ```

 # Create a Configration file for Typescript Complier
 - For this we use command
 
 ``` tsc --init ``` 

  <!--Now a tsconfig.json file will appear on left in side Explorer-->
  <!--For more know about it just little bit explore tsconfig.json file you can read small discription of every single line-->

  - Intial some things are commented in tsconfig.json .
  - We uncomment the "rootDir":"./src" give path src folder which we created.
  - Put index.ts file into "src" folder.
  - than create "dist" folder for get (Javascript) index.js file there.
  - Check "Emit"  section in tsconfig.json file and give path as "./dist" to "outDir":"./dist" as shown.  
  - For remove all comments written in "index.ts" file uncoment "removeComments":true line.
  - To reduce error in our index.js(Javascript) file uncomment "noEmitOnError":true this will never make change in index.js file if any error    in index.ts(Typescript) file will come.
  - Then just type "tsc" in CMD terminal and see the magic.
   -- Done with basic setting of tsconfig file.

  # How to Debugg our code if Error occur 

    - Go inside of tsconfig.json and uncomment "sourceMap":true file.
    - Run Tsc command and check magic in "./dist" folder.
    - For run debugging click fourth option on left side.
    - Click on "launch.json" .
    - Select Node.js from dropdown.
    - launch.json file will open. Add one more file after "program" file
        ``` "preLaunchTask": "tsc: build - tsconfig.json" ```

    - Afte save  this close Launch.json.
    - Come on index.ts file and click on Debugg tab after that click on "Launch Program" .    
    - command for run Debugging
      ``` F5 ```  for run debugg session just from keyboard.
      ``` F10 ``` for go line by line.
       for more watch video carefully.

  # what next now?
   - Things which we are coverning in this tutorial:
        
       - The any Type       
       - Arrays             
       - Tuples              
       - Enums            
       - Functions             
       - Objects    

     ## In Typescript    /       IN Javascript
     - any                       - Number
     - unknown                   - string
     - never                     - boolean
     - enum                      - null
     - tuple                     - undefined
                                 - objects


  # Don't use this but better if you know
   - for deal with "any" type in Typescript just go in tsconfig.json under "Type Checking" section:
      ```"noImplicityAny":true``` convert into  ```"noImplicityAny":false```                       
      ### this is not good writing for developer I just show for your knowldge        

      ~~ make it ```"noImplicityAny":true``` and then comment it after checking what this do actually 

  # To avoid unUsed Parameters  
    - Go to "tdconfig.json" file under the  ```Type Checking``` section.
    - Uncomment file  ```"noUnusedParameters": true ``` and comeback to our file.    

    # To Debugg Return parameter problem
       - Go to "tdconfig.json" file under the  ```Type Checking``` section.
       - Uncomment file  ```"noImplicitReturns": true``` and comeback to our file.   

    # To Check any unUsedeLocal is there
       - Go to "tdconfig.json" file under the  ```Type Checking``` section.
       - Uncomment file  ```"noUnusedLocals": true``` and comeback to our file.      


# Section-2

 - what we cover in this section:
   ### Type Aliases
   ### Unions and intesections
   ### Type narrowing
   ### Nullable types
   ### The unkown type
   ### The never type

#                    Follow the DRY principle                   #
``` Don't Repeat Yourself ```

# TO see NullCheck is enable or disabled 
       - Go to "tdconfig.json" file under the  ```Type Checking``` section.
       - Uncomment file  ```"noUnusedLocals": true``` .
       - when you uncomment it then you see it is enabled by default but you can change it.
       - If you make it "False" then no complie error will come. 
       - Again! this is bady practice never try to use it.

## We done basic of Typescript. Now we are ready to take one step further towords Intermidate Learning ot TSC. 

  # what we are covering in section-3
    - HTML & CSS with Typescript
        - Simple Todo app Project
        - How to set-up our "tsconfig.json" file before start coding
        - where we gonna store our ".ts" extension files
        - Also see where we get out ".js" extension files
        - API intigration.    
        - CRUD operation with type script.
        - Create item
        - Replace item
        - Update item
        &
        - Delete item
           

# Step for set-up

     - Make folder name ```Typescript-Todo-App``` then open that folder in Visual studio code.

     ```npm init``` command for get ```package.json``` file.
     - for install typescript  as dev dependencies run ``` npm i --save-dev typescript``` in terminal shell.
     - To get "tscongif.json" file run command ```npx tsc --init``` .
     - Add "start":"tsc --watch" under the "scripts" object in package.json file to convert ".ts" file into ".js" automatically.
     - Create two folder one name as "src"  and otherone with name "dist".
     - Provide "rootDir":"./src" in tsconfig.json file under /*Modules*/ section.
     - Provide "outDir":"./dist" in same file under /*Modules*/ section.
     - At end run ```npm i``` for node_modules folder.

     @Brar21 we good to go!!!


***importent thing if you want to use external modules change file extension "module":"es6", under the /*Modules*/ section ***

//for example of installation of external modules you can use ```npm i uuid```

# Issues we face after doing this
    - Still unable to use node_module or npm package directly
    - Browser show error continuesly after install every dependencies
    
# How to get out from this problem
  - we need a bundler to get full access of npm.packages .
  - commad you can use to install bundler is written below.


```npx create-snowpack-app . --template @snowpack/app-template-blank-typescript```
                                 or
```npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --force```

***make change in files as you see on screen***

***Handle npm_modules error we need external @type/library for find type of npm_package***
  - see screen very attentively for find where you get command.


# Typesctipt Advance
   - 
   Getting Started
```npm init -y```

```tsc init```

  **Configure tsconfig.json file**
        {
        "compilerOptions": {
            "target": "ES6",
            "outDir": "dist"
        },
        "include": ["src/**/*.ts"],
        "exclude": ["node_modules"]
        }

## Command
```tsc --watch```

## Topics Details Explaintion

**ENUM**

      -  Enums are one of the few features TypeScript has which is not a     type-level extension of JavaScript.

      -   Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

**Numeric enums**

        ```enum Direction1 {
        Up,
        Down,
        Left,
        Right,
        }

        let up = Direction1.Up; // 0
        let down = Direction1.Down; // 1
        Tuple
        // Array with exact 2 elements
        let a: [string, string] = ["Hi", "Bye"];

        // 2 D array
        let arr: Array<[number, number]> = [
        [1, 1],
        [2, 2],
        ]```


       
**GENRICS**

        An Art of designing re-usable functions in Typescript, where we pass type along with

        type Student = { rollNo: number; fullName: string; age: number };
        type Instructor = { id: number; name: string; subject: string };

        let students: Student[] = [
        { rollNo: 1, fullName: "A B", age: 21 },
        { rollNo: 2, fullName: "R F", age: 27 },
        ];

        let instructors: Instructor[] = [
        { id: 1, name: "A B", subject: "RCT-101" },
        { id: 2, name: "R F", subject: "RCT-201" },
        ];

        function getStudent<Type>(arg: Type[], index: number): Type {
        return arg[index];
        }

        getStudent<Student>(students, 0); // Okay
        getStudent<Instructor>(instructors, 0); // Okay

**keyof**

           The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:

            type Person = { name: string; lastName: string };
            let person1: Person = { name: "Ritesh", lastName: "Firodiya" };

            type P = keyof Person;
            // P can be `name` or `lastName` i.e. String Varient

            const getPersonValue = (obj: Person, key: P) => {
            return obj[key];
            };

            getPersonValue(person1, "name"); // Okay
            getPersonValue(person1, "Name"); // Error

## typeof

            Copying type from other object/variable without knowing tyoes ourself

            let s = "hello";
            let n: typeof s;

## Typescript with React.js

*Topic covering in section-4*
     - How to install React.js with Typescript
     - Use React Hooks with Typescript
     - Make Counter-app with React.js & Typescript
     - Props
     - Children
     - Events
     - useState with generics
     - Synthetic Events and Types
     - Axios API response Mapping
     - Make Todo-app with Typescript& React.js


# Commad line and Tsconfig.json file setting
   - Typescript can be used with react, using command
   ```npx create-react-app lec --template typescript```
## Explain Folder Strudture.
    - '.tsx' file extension.

## Coding Task

# Create a Todo App with API integration
       - TodoInput Component
       - TodoItem component

*Tasks*

       - Create Componets
                *TodoApp.tsx*
                *TodoInput.tsx*
                *TodoItem.tsx*

## create a db.json file.
        [
        "todos": [
            {"id": 1, "value": "Item 1", "isCompleted": false},
            {"id": 2, "value": "Item 2", "isCompleted": true},
            {"id": 3, "value": "Item 3", "isCompleted": true}
        ]
        ]
## Start json-server on port: 8080
   ```json-server --watch db.json --port 8080```

            Create an api.ts file to write all API's in it

            Write types for everything