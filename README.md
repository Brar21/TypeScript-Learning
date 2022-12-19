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