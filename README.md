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

# LOCAL MODULE

**LOCAL MODULE**
* Modules that you create within your own project directory.
* Each file is a module that is isolated by default.
* We can skip specifying JS extension(.js) as node.js will infer it on our behalf.


**require & module.exports**
* These two are part of the BUILT-IN module system in Node.js that enables you to break your code into smaller, reusable modules
* I am placing these two under 'LOCAL MODULE' to demonstrate its most basic usage WITHIN local module.
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

# BUILT-IN MODULE
Source: Node.js Documentation (Link: https://nodejs.org/docs/latest/api/path.html#path)

**PATH MODULE**
* The path module provides utilities for working with file and directory paths.
* Once the module is loaded, we can access various properties and method exposed by that module
* It can be accessed using:
  
![image](https://github.com/asyikin22/Node.js/assets/148519441/d3d38e8b-5bf9-4a09-a8cb-07106996d8b4)
* What does this mean?
  1. We call the module using require function
  2. Get the result which is an object.
  3. Store it in a constant
 
**Let's experiment wiht PATH MODULE!**
* Input built-in module on top of the code editor
* We will play around with:
  1. **path** (file name & directory)
  2. **Base name** - returns the last portion of a path
  3. **Extension name** - returns the extension of the path
  4. **Parse method** - returns an object whose properties represent significant elements of the path
  5. **Format method** - returns a path string from an object
  6. **Join method** - joins all given 'path' segments together using the platform-specific separator as a delimiter
* The table below summarizes how we can use the built-in module inside code editor and their corresponding output in terminal
  
  ![image](https://github.com/asyikin22/Node.js/assets/148519441/e91954fc-78a0-4732-b0a9-83cce17e3d93)

# FILE SYSTEM
**AIM**: It allows you to work with the file system on your computer

**Use 'require' function to use built in module**:
* To make use of a built-in module, we have to input it first by using 'require' function.
* 'node:fs' is the name of our built-in module
* Once this is loaded, we can access various properties and methods exposed by the fs module
  
  ![image](https://github.com/asyikin22/Node.js/assets/148519441/c843a3e8-a164-4cfa-9de8-d7d3025a5684)

**Read file with readFileSync (SYNCHRONOUSLY)**
* Link to documentation - https://nodejs.org/docs/latest/api/fs.html#fsreadlinksyncpath-options
* We are going to learn how to read the contents of a file synchronously.
  1. Sync tells use the method is a synchronous way of reading a file
  2. JS engine will read till the file contents are read before moving on to the next line
* Let's create a new filed called file.tx with some text in it
* Inside fs.js (our main file) we are going to invoke a method called readFileSync.
    1. To this method, we pass in the path to the file we want to read ("./file.txt")
    2. We then capture the return value in a constant called fileContent
    3. Log it to the console
* Once we logged it, the terminal will show buffer with binary data so we have to view it in human readable format. We need to set a second argument in the function 'utf-8' 
* When we save the code and re-run it, the terminal will show the actual text in file.txt

  ![image](https://github.com/asyikin22/Node.js/assets/148519441/3111a964-f029-4e74-a64c-f3c8a6c239c7)

**Read file with readFile (ASYNCHRONOUSLY)**:
* Link to documentation - https://nodejs.org/docs/latest/api/fs.html#fsreadfilepath-options-callback
* Node.js is asynchronous, it has features to do tasks without blocking the main thread  ---> We can do this with readFile method.
* Let's break down its syntax:
  1. First argument: "./file.txt"
  2. Second argument is a 'callback function' which will be invoked after the file contents have been read (A function that is passed as an argument to another function is a callback function)
  3. Callback function has two parameters, 'error' and 'data'
		* Error is the error that was identified when reading the file if there was any
      * If there was no error, it is set to null and data is populated with the file contents
  4. Function body: if and else
  5. Now we have to add 'utf-8' as a second argument instead to make it readable.

  ![image](https://github.com/asyikin22/Node.js/assets/148519441/cb7bdcd5-f502-4364-9ba1-064f1d442e6b)

  **Write file with writeFile (SYNCHRONOUSLY)**
  * Link to documentation - https://nodejs.org/docs/latest/api/fs.html#fswritefilesyncfile-data-options
  * We are going to use write method with synchronous version, writeFileSync
  * The syntax involved:
      1. First argument is the path to the file: "./hello.txt" ---> Please note that the file does not exist before we run this code!
      2. Second argument is the file content: "Hello World!"
      3. When we run the code in fs.js, a new file called 'hello.txt' is created with "Hello World!" as the content.
  ![image](https://github.com/asyikin22/Node.js/assets/148519441/25f7ccba-19dd-41ab-9bcb-2132c017153b)

**Write file with writeFile (ASYNCHRONOUSLY)**
* Link to documentation - https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback
* We are going to use write method with ASYNCHRONOUS version
* The syntax involved:
  1. First argument is the path to the file: "./hello.txt"
  2. Second argument is the file content: "Hello Asyikin"
  3. Third argument is 'error first callback'
  4. In the function body, check for an error with if else 
       * If error exists, we log it to the console.
       * If no error detected, we will display "File Written"
  5. When we run this code, the updated text is "Hello Asyikin" instead of "Hello Word!"
       * By default, writeFile overwrite content of sync file.
         
 ![image](https://github.com/asyikin22/Node.js/assets/148519441/548946b9-368e-4451-a50a-a698d7af889d)

 **How to append file content from writeFileSync (Synchronous version) to writeFile (Asynchronous version)**
 * Add a THIRD argument, it is an object called { flag: "a" } -
 * 'a' stands for append.
 * Add a space before " Hello Asyikin" so we can have a new file content updated to "Hello World! Hello Asyikin!"
   
![image](https://github.com/asyikin22/Node.js/assets/148519441/ab54cb9b-0983-4b39-82ab-c9e629172601)

# BUILD A HTTP SERVER IN NODE.JS

**OBJECTIVE**: 
* How to build a basic HTTP server in node.
* It shows the first step in backend development with node creating server that can serve up files in reponse to a request made from the client

**STEP-BY-STEP**:
1. Server is going to run locally in my computer and I'll be able to access it through a given port.
2. First thing we need to do is to load the http package into the script.
3. Create a createServer method, store it in const variable.
   * Pass a callback function into create server with 2 parameters, req and re
5. Specify port number (i.e. 3000)
   * Store it in a variable
   * Use method 'server.listen' to make sure it's up and running
   * Pass a callback function to log a message saying 'Server running on port 3000".
  
**HOW TO START THE SERVER**:
* Go to terminal and type 'node script.js'
* It will log a message that says 'Server running on port 3000".

![image](https://github.com/asyikin22/Node.js/assets/148519441/b6be571f-8535-454e-8d88-9b4334f182f4)

**HOW TO VIEW IT IN OUR LOCAL HOST?**:
* Type local host and specify the local port(3000)
* It will not load on the web page because we need to end the response in our code
* To fix this, we need to write a response rather than dealing with the request.
  1. provide a status code: 200
  2. Specify what kind of response it's going to be  by setting a header using setHeader method with 2 parameters, Content-Type and 'text/plain'
  3. Write a response using writeMethod
  4. End the response by writing res.end()
     
     ![image](https://github.com/asyikin22/Node.js/assets/148519441/8edb8073-629b-4bc3-b95c-dec78f33a9f1)


**HOW CAN WE SERVE UP OTHER FILE USING NODE JS?**:
* Change the content type from 'plain' to 'html'
* Create an html file
* We need to access the html file in our node script - using file system (fs)
* Load the file system module: const fs = require('fs');
* Make a request to the file system so we can access index.html file to serve that up.
* Make that request inside a 'try catch' syntax
  1. Use 'readFileSync' and pass 'index.html' as an argument - store it in variable called 'html'
  2. Write a response specifying 'html' content as the data that will be sent to the server
  3. Add res.end() to end the response. * If there is an error, we tell the server to respond with 404, log a message that says 'Bad request' and end the response.

![image](https://github.com/asyikin22/Node.js/assets/148519441/bb2f8c0e-3932-46d6-bbcd-220910ad2fa2)

**WHAT DOES IT LOOK LIKE ON OUR WEB PAGE WHEN AN ERROR IS CAUGHT?**:

![image](https://github.com/asyikin22/Node.js/assets/148519441/582d6978-41e3-4011-bdc6-f6605ea1f1bb)

# NODE PACKAGE MANAGER

![image](https://github.com/asyikin22/Node.js/assets/148519441/82f16a92-49d3-4b9c-8635-2f440fe3c894)

# Package.json 

**npm init vs npm init -y**:
![image](https://github.com/asyikin22/Node.js/assets/148519441/37782c91-d412-4f04-8efc-10d141c67c76)

**INSTALL NPM PACKAGE AS DEPENDENCY**:

![image](https://github.com/asyikin22/Node.js/assets/148519441/42394694-3fc0-4eb2-a985-d2a1a8e4bb61)

**INSTALL NPM PACKAGE AS DEVDEPENDENCY**:
* Note the difference between Dependency and devDependency
* 'nodemon' as a package is NOT needed in production as compared to 'lodash'
* It is used to restart our application and we don’t have to type 'node <file name>' every time we make changes

![image](https://github.com/asyikin22/Node.js/assets/148519441/ef6822e8-1e30-4c1b-96de-4d6629750dd6)

**IGNORE NODE MODULES FILES THAT ARE TOO BIG**:

![image](https://github.com/asyikin22/Node.js/assets/148519441/287c0671-d2ef-4d4c-ac45-8c22bfd7e71b)

**UNINSTALL A PACKAGE**:

![image](https://github.com/asyikin22/Node.js/assets/148519441/6c9130fb-6763-47be-b40a-5b3fde8c1156)

# EVENT LOOPS

**DEFINTION**: The event loop is what allows Node.js to perform non-blocking I/O operations
* despite the fact that JavaScript is single-threaded
* by offloading operations to the system kernel whenever possible.

**SOURCE**: https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#event-loop-explained
<BR>

**4 EXAMPLES OF EVENT LOOP**
* Read file
* setTimeout()
* setInterval()
* server

![image](https://github.com/asyikin22/Node.js/assets/148519441/7bd3def5-f0e6-42e6-80bd-2d00fdac27cb)

# ASYNCHRONOUS PATTERNS - CALLBACKS, PROMISES, ASYNC-AWAIT

**CALLBACKS**:
* Functions that are passed as arguments to other functions
* They are invoked alter after asynchronous operation completes
* Node.js registers a callback function to be executed upon completion which allows it to execute other codes while waiting for operation to finish.

**ERROR-FIRST CALLBACKS**:
* Used in node.js to handle error in asynchronous functions.
* Callback function passed to an async function as an arguments
* Patterns of callbacks:
  1. First parameter of callback function is reserved for an error object
  2. If error occurs during execution of function, the parameter will contain error object ('ERROR')
  3. If no error occurs, it will be 'null' or 'undefined'
  4. Second parameter that contains successful result ('data') will be returned.
   
![image](https://github.com/asyikin22/Node.js/assets/148519441/9f121e3b-b825-4a45-9203-3017ed33c8d1)

**PROMISE:**
* An object representing the eventual completion or failure of an asynchronous operation.
* It allows you to handle asynchronous operations in a more elegant and readable way
* It has 3 states: pending, fulfilled, rejected.
* 2 main methods: 'then()' and 'catch()'
  
![image](https://github.com/asyikin22/Node.js/assets/148519441/47f2d3d3-f5ae-415a-83ac-8806ea900163)



**ASYNC-AWAIT**:
![image](https://github.com/asyikin22/Node.js/assets/148519441/b61f4490-85c5-4590-a385-581e5bbb1cab)


**COMPARISON BETWEEN CALLBACK, PROMISE AND ASYNC-AWAIT**: USING FS MODULE TO TO READ FILE INSIDE TEXT.TXT FILE
![image](https://github.com/asyikin22/Node.js/assets/148519441/1724d58c-d864-4091-8c1c-c1fa1ea06f67)

# EVENT

**EVENT MODULE**
* Built-in module that allows us to work with events in Node.js
* It is an action or an occurrence that's happened in our application that we can respond to
* We can dispatch our own custom events and respond to those custom events in non-blocking manner

![image](https://github.com/asyikin22/Node.js/assets/148519441/16b1dc7d-02f9-40b6-8e4e-e3cea12fa5e3)

**EVENT-DRIVEN PROGRAMMING**

**Basic Setup**

![image](https://github.com/asyikin22/Node.js/assets/148519441/63410613-b932-4768-a5cc-a75c55c4e934)

**Additional Info**
* We can have as many functions as we'd like and emit it
* Emit method cannot precede on method as we need to listen to the event first
* We can pass arguments when we're emitting the event
  
![image](https://github.com/asyikin22/Node.js/assets/148519441/b10b1e77-9458-41ed-bdc6-be91d0d46150)

**EVENT-DRIVEN PROGRAMMING EXAMPLE - ORDERING PIZZA**
![image](https://github.com/asyikin22/Node.js/assets/148519441/7432e5e2-750a-471d-ab9a-460ddd3940f9)

**BASIC REQUEST EVENT - HTTP**

![image](https://github.com/asyikin22/Node.js/assets/148519441/4c02b80c-751a-4352-bdfc-ac0c6081496f)


# STREAM AND BUFFER

* Stream allows us to start using data before it has finished loading
* Some files are very large and it takes some time to read them
* Small chunks of data are packaged up into buffer and then sent down stream every time the buffer fills
* Example: Streaming Netflix & Youtube
* A little bits of data are sent to the browser a bit at a time so you can start watching w/o having to wait for the whole video to finish loading

**CREATE BIG FILES**
* To demonstrate how we can use stream function, I will first create a very big file.
* 'Hello World' string is written 5000 times into a new file called big.txt.

![image](https://github.com/asyikin22/Node.js/assets/148519441/bf134812-ed1a-4dbe-9346-76bcb883aea0)


**STREAMS - createReadStream function**

![image](https://github.com/asyikin22/Node.js/assets/148519441/9d5f88af-5315-4c7d-b3b9-c76673b609cc)

**STREAMS - HTTP Application**

**1) ACCESSING FILE USING READFILE FUNCTION**:

![image](https://github.com/asyikin22/Node.js/assets/148519441/37631c6e-d7de-4fc8-914f-29d2c134e585)

**ACCESSING FILE USING READSTREAM FUNCTION (Re-factor from readFile function)**:

* The problem with using readFile function is the data we are sending users are way too big
* We will use pipe() method to efficiently stream data from a readable steam directly to writeable stream such as the response object (res)
* Writeable stream - represents a destination for data to be written
  1. Files
  2. Network sockets
  3. HTTP responses (the one we are using in the example)
     
![image](https://github.com/asyikin22/Node.js/assets/148519441/c74732f9-3b95-42ba-9111-0e5d6abe3aec)



























     
  















 




