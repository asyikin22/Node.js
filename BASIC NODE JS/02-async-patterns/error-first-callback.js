const fs = require ('fs');

fs.promises
    .readFile('../content/text.txt', 'utf-8')
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

    // fs.readFile('../content/text2.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('ERROR');
//         console.error(err);
//     } else {
//         console.error('GOT DATA');
//         console.log(data);
//     }
// })

