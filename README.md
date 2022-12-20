# TypeScript-Learning
Daily Typescript practice and learning from youtube , google anf from other leraning resources.

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