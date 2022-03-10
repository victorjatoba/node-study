const callMe = (val) => new Promise((resolve, reject) => {
    if(val) {
        resolve("I am resolved")
    } else {
        reject("I am rejected")
    }
});

callMe(false)
.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
