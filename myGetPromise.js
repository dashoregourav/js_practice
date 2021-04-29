const fs = require('fs');
const myGet = new Promise((resolve, reject) => {
    fs.readFile('./File/text.txt', 'utf8', (err, data) => {
        if (err) {
            return reject(err);
        }
        else {
            return resolve(data);
        }
    })
})

myGet.then((data) => {
    // console.log("then called");
    console.log(data);
})
    .catch((error) => {
        // console.log("catch called");
        console.log(error);
    });