// // Implement rotateArr(arr, shiftBy) that accepts array 
// and offset. Shift arr's values to the right by that amount. 
// 'Wrap-around' any values that shift off array's end to the other side, 
// so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. 
// Don't use built-in functions.
// // Second: allow negative shiftBy (shift L, not R).
// // Third: minimize memory usage. 
// With no new array, handle arrays/shiftBys in the millions.
// // Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy) {
    if(shiftBy % arr.length === 0) {
        console.log("Shift by is a multiple of n");
        return arr;
    }
    var returnArr = [];
    returnArr.length = arr.length;
    var actualShiftBy = shiftBy % arr.length;

    for(var index = 0; index<actualShiftBy; index++) {
        returnArr[index] = arr[arr.length-actualShiftBy+index];
    }

    for(var index2=actualShiftBy; index2<arr.length; index2++) {
        returnArr[index2] = arr[index2-actualShiftBy];
    }

    return returnArr;
}
console.log(rotateArr([1,2,3,4,5], 0));
console.log(rotateArr([1,2,3,4,5], 1));
console.log(rotateArr([1,2,3,4,5], 2));
console.log(rotateArr([1,2,3,4,5], 3));
console.log(rotateArr([1,2,3,4,5], 4));
console.log(rotateArr([1,2,3,4,5], 9));