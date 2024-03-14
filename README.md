# INTRODUCTION

**WHAT IS NODE.JS?**
* It is a runtime environment that allows developers to run JavaScript on a server outside a web browser
* We can write application on the server when it could previously only be written in web browser.
* It allows developers to write a FULL STACK application in a single language.

**HOW TO INSTALL NODE.JS?**
* We can check and see if Node.js has been installed in our computer via git bash terminal
* The shorcut keys to open bash terminal on window is 'windows' + '1' (This only applies if you have already pinned your terminal to your taskbar. 1 refer to the first position on taskbar)
  
  ![image](https://github.com/asyikin22/Node.js/assets/148519441/1cdc2c30-1a7e-4195-bb7d-6f5de09a2f18)

* Use 'node -v' to check the installation status. The image below shows it's already in my computer😊
  
  ![image](https://github.com/asyikin22/Node.js/assets/148519441/13922a98-7193-41a2-afe5-7ca4e3838a82)

**WHAT IS REPL?**
* It is an interactive programming environment that is used to quickly test code snippets, experiment with language features and perform quickly calculations or tasks without the need to create a separate script or file.
*   1. **Read**: Read user input
    2. **Evaluate**: Evaluate user input
    3. **Print**: print result to the console
    4. **Loop**: Loops back to beginning
 
**HOW CAN WE RUN OUR JAVASCRIPT CODE ON REPLY OR CLI?**
* It is important to familiarize ourselves with these commands in order to run our javascript code in a **REPL** environment or **CLI** (Command Line Interface)
* You can use this cool trick to open a new terminal in your VS Code without having to use GUI (Graphical User Interface - buttons, icons, menus) 'ctrl' + 'shift' + `backticks`.
  
  ![image](https://github.com/asyikin22/Node.js/assets/148519441/c65b2e49-b3a8-4096-8467-693abe0bd1a4)

  ![image](https://github.com/asyikin22/Node.js/assets/148519441/36f96cba-acf9-420b-a69d-35373bd31e74)


* I have summarized the commands in the table below and the meaning behind each command:

  ![image](https://github.com/asyikin22/Node.js/assets/148519441/ff85dc2c-97c0-424e-be5a-cc6d161c1576)

**NOTE**: I will update the table from time to time as I progress further into this topic

<br>

**WHAT DOES IT LOOK LIKE RUNNING JAVASCRIPT CODE IN A REPL ENVIRONMENT VS NODE.JS?**

![image](https://github.com/asyikin22/Node.js/assets/148519441/040032e2-a465-401f-8938-6e704613aeac)

# MODULE
* A module is a discrete unit of code that encapsulates specific functionality
* It allows you to organize your code into reusable components, making it easier to manage, maintain, and scale your Node.js applications.
* Each file is treated as separate module
* There are 3 types of modules, namely:
  
 ![image](https://github.com/asyikin22/Node.js/assets/148519441/82791a7e-7a3f-4e9f-bb9b-fe214d71c9b6)


**LOCAL MODULE**
* Modules that you create within your own project directory.
* Each file is a module that is isolated by default.
* We can skip specifying JS extension(.js) as node.js will infer it on our behalf.


**require vs module.exports**
* These two are part of the module system in Node.js that enables you to break your code into smaller, reusable modules
* They help manage dependencies between separate modules/files

**require function**
* Built-in module loader used to import modules into JS code
* It allows you include functionality from other files into your app
* With this function, we provide the path to the module we want to import
* We're basically asking V8 to execute the code in that imported module.

**Using require function step-by-step**
1. Call the function at the top of the function of the main file (index.js)
2. We pass in the path to the module as a string - single/double quotation
3. Path: ('./add.js')
4. Require function loads the 'add.js' module into 'index.js'
5. Save the change, then re-run the code - you can see '15' followed by the hello text
6. The code in index.js gets executed by the V8 engine ---> output is logged in the terminal.
   ![image](https://github.com/asyikin22/Node.js/assets/148519441/7b663381-6323-4990-973c-babe3a03c3d7)

   ![image](https://github.com/asyikin22/Node.js/assets/148519441/7a3fa8fd-1927-454a-bd6d-4e3db9bd44bb)


**Using module.exports step-by-step**
1. Instead of calling add and logging the sum value, we're going to export the add function from this module.
2. We assign add function to the module.exports object.
3. Value of this object is what the 'require' function returns for the index.js module
4. This allows use to store add in a constant
     * Within index.js, we call the 'add' function from 'add.js' module with argument 7 and 8 and assign it to variable 'sum'
     * Or you can simply copy & paste the function from 'add.js' into index.js after storing 'add' in constant.
6. Now that we are exposing the 'add' function and loading it up in index.js, we can call the 'add' function any number of times as it is a reusable block of code.
7. Now let's try out different value, 1 and 2 (which will return 3)
8. I have summarized how we can use require and module.exports in the table below to help us visualize the differences.
   
   ![image](https://github.com/asyikin22/Node.js/assets/148519441/4e8e4d68-ed3a-4386-9bc3-7498e3b2dd71)

**So what are the differences between 'require' and 'module.exports'?**
* They work hand in hand to create reusable and maintainable code.
* The main difference is summarized in the table below:
  
![image](https://github.com/asyikin22/Node.js/assets/148519441/f5a53ae0-c717-48ef-a196-cc0d0254df19)

















 




