function withLogging(fn) {
    return function (...args) {
        console.log("Calling function with args: ", args);
        const result = fn(...args);
        console.log("Result: ", result);
        return result;
    }
}

function add(a, b) {
    return a + b;
}

const loggedAdd = withLogging(add);
loggedAdd(10, 56);