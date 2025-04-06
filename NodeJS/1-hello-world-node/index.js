console.log("Hello node");

const array = [1,2,3,4,5];
console.log(array, 'array');

setTimeout(() => {
    console.log("this message is delayed by 2 seconds");
}, 2000);

console.log("This is the last line of Synchronous code");