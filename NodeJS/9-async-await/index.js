// Async-await are exactly what promises are doing i.e. to handle our asynchronous operations
// Then why do we use it?
// Cause it's like syntactic sugar of promises as it's much simpler to write

// How do we create async-await?

// First, Each async function always returns a Promise and await keyword is only used inside the 
// async function
// That is, we can't use outside of it

// So what await does, it pauses the execution of the function until the Promise is resolved

function delayFunction(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name) {
    await delayFunction(2000);
    console.log(name);
}

// delayedGreet("Adarsh");


const divide = async (num1, num2) => {
    
    try {
        // simulate an async operation (eg. setTimeout or API call)
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2;

    } catch (error) {
        console.error("Error caught:", error.message);
        return null;
    }
};

console.log(divide(10, 0));
console.log( divide(4, 2));

/*
async function mainFunction() {
    console.log(await divide(10, 0));
    console.log(await divide(4, 2));
}

mainFunction();
*/