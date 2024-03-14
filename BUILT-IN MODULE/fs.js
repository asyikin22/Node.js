const fs = require("node:fs");

console.log("FIRST");

//readFileSync - read file synchronously
const fileContent = fs.readFileSync("./file.txt", "utf-8")

console.log(fileContent);

console.log("SECOND");

//readFile - read file asynchronously
fs.readFile("./file.txt", "utf-8", (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

console.log("THIRD");

//Write content into a file - synch
fs.writeFileSync("./hello.txt", "Hello World!");

//Write content into a file - Asynch (this will overwrite async file)
// fs.writeFile("./hello.txt", "Hello Asyikin",(err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File Written");
//     }
// });

fs.writeFile("./hello.txt", " Hello Asyikin!", { flag: "a" }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File Written");
    }
});