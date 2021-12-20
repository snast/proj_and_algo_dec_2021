const performance = require('perf_hooks').performance;
// Factorial: A factorial is defined as the product of positive integers from 1 to n, and it's written as "n!". For example:

// 1! = 1 = 0! (by definition, 0! = 1)
// 2! = 2*1 = 2 = 2*1!
// 3! = 3*2*1 = 6 = 3*2!
// 4! = 4*3*2*1 = 24 = 4*3!
// 5! = 5*4*3*2*1 = 120 = 5*4!
// Notice that n! = n*(n-1)!. So the problem can be broken up into a simpler case.

function factorial(n) {
    //Base Case
    if(n < 2) {
        return 1;
    }
    //fact(0) = 0 * fact(-1)
    //Recursive Step "Move forward/backwards"
    // fact(1) = 1
    //fact (2) = 2 * fact(1)
    //fact(3) = 3 * fact(2)
    // n = 5
    return n*factorial(n-1)
}

// for(var i = 1; i<6; i++) {
//     console.log("Running factorial function with argument: " + i);
//     console.log(factorial(i));
// }

// console.log(factorial(52));

//Fibonacci numbers
// 0 , 1, f(2) = 0 + 1, f(2) = f(1) + f(0), f(3) = f(2) + f(1)              , 1 , 2 , 3 , 5 ,8 , 13 , 21 , 34
// 0 , 1 , (0+1)=1, (1+1) = 2, (1+2) = 3, (2+3) = 5, (3+5) = 8
// 0 , 1 , 1, 2, 3 ,5 ,8, 13, 21,.....
var count = 0;
function fibonacciRecursion(n) {
    //Base Case
    count++;
    if (n < 2) { //n is either 0, 1
        return n;
    }

    //Recursive Step
    // tn = tn-1 + tn-2

    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2);

}
// for(var i = 0; i<15; i++) {
//     console.log("Running fibonacci function with argument: " + i);
//     console.log(fibonacciRecursion(i));
// }

fibonacciRecursion(5);
console.log(count);
count = 0;
function fibIter(n) {
    count++;
    if(n<2) {
        return n;
    }
    var a = 0;
    var b = 1;
    var oldB = b;

    for(var i = 2; i<n; i++) {
        count++;
        oldB = b;
        b = a+b;
        a = oldB;
    }

    return a+b;
}
fibIter(5);
console.log(count);

var startTime = performance.now();
console.log(fibonacciRecursion(25));
var endTime = performance.now();

console.log("Our fibonacci recursive function took " + (endTime - startTime) + " ms");

var startTime = performance.now();
console.log(fibIter(25));
var endTime = performance.now();

console.log("Our fibonacci iterative function took " + (endTime - startTime) + " ms");


function fibRecursionWithMemo(n) {
    var arr = [0,1];
    arr.length = n+1;
    function fib2Helper(num) {
        if(num<2) {
            return arr[num];
        }
        if(arr[num] == null) {
            //num = 5
            arr[num] = fib2Helper(num-1) + fib2Helper(num-2);
        }

        // [ 0, 1, 1, 2, null]
        

        return arr[num-1] + arr[num-2];
    }

    return fib2Helper(n);
}

var startTime = performance.now();
console.log(fibRecursionWithMemo(25));
var endTime = performance.now();

console.log("Our fibonacci recursive with memoization function took " + (endTime - startTime) + " ms");
