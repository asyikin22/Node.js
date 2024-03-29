const myPromise = new Promise ((resolve, reject) => {

    const rand = Math.floor(Math.random() * 2);             //returns either 0 or 1
    if (rand === 0) {
        resolve();                                          //fullfill promise
    } else {
        reject();                                           //reject promise
    }
});

myPromise
    .then(() => console.log('Success'))
    .catch(() => console.error('ERROR'));

// fetch('---API URL---')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

