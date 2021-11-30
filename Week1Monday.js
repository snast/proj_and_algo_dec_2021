// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. 
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions.

// 4 2 1 3 5 -> 4 4 2 3 5 -> 1 4 2 3 5
/*
    1) Find the smallest element
        - set a variable to hold the smallest elem
        - for loop from 0 to arr.length
        - as we find smaller elements in the array, update minElem, minIndex
    2) Shift all elements left of smallest elem to the right
        - for loop from minIndex to 0
    3) Put smallest elem in arr[0]

    Input/Outputs
    [4,2,1,3,5] -> [1,4,2,3,5]
    [2,4,7,8,1,6,3,9] -> [1,2,4,7,8,6,3,9]
    [] -> []

    Test Cases
    - Normal Case
    - Empty Array Case

*/
function minToFront(arr) {
    var minIndex = 0;
    var minElem = arr[minIndex];

    for(var index = 0; index<arr.length; index++) {
        // change minIndex and minElem if smaller than current elem
        if(minElem > arr[index]) {
            minIndex = index;
            minElem = arr[minIndex];
        }
    }

    for(var index2=minIndex; index2>0; index2--) {
        //shift everything left to the right
        arr[index2] = arr[index2 -1];

    }

    //put smallest elem in arr[0]
    arr[0] = minElem;

    return arr;
}
console.log([4,2,1,3,5]);
console.log(minToFront([4,2,1,3,5]));
console.log([2,4,7,8,1,6,3,9]);
console.log(minToFront([2,4,7,8,1,6,3,9]));
console.log(minToFront([]));