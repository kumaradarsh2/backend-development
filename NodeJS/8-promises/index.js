const { copyFileSync } = require("fs");

function delayFunction(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// console.log("hey there");

// delayFunction(2000)
//     .then(() => console.log("After 2 seconds, Promise resolved"))
//     .then(() => console.log("end"));
// console.log("end");

const divide = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Cannot divide by zero");
        } else {
            resolve(num1 / num2);
        }
    });
}

divide(10, 0)
// Note: .then means Promise is resolved so whatever value we are getting, we can do smth with it
.then(function (result) {
    console.log(result);
})
// .catch means Promise is rejected and we have error and so we can console that out
.catch(err => console.log(err));
