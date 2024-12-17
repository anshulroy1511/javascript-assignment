console.log(addNumbers(3, 4)); // 7 (hoisting works)

function addNumbers(a, b) {
    return a + b;
}


// multiply
console.log(multiplyNumbers(3, 4)); // Error: Cannot access 'multiplyNumbers' before initialization

const multiplyNumbers = function (a, b) {
    return a * b;
};


// variable hosting
function sum(a, b) {
    console.log(total); // undefined (hoisted but uninitialized)
    var total = a + b;
    return total;
}
console.log(sum(3, 4)); // 7


//. Variable Hoisting with let, var, and const
{
    console.log(a); // undefined (hoisted with var)
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    // console.log(c); // ReferenceError: Cannot access 'c' before initialization

    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}


// 5. Demonstrating the Temporal Dead Zone
{
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 50;
    console.log(x); // 50
}
