/*
String: In-Order Subsets
Create strSubsets(str). Return an array with every possible in-order character subset of str. 
The resultant array itself need not be in any specific order – 
it is the subset of letters in each string that must be in the same order as they were in the original string. 
Given "abc", return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).
*/

// strSubsets("abc") - >  ["", "c", "b", "bc", "a", "ac", "ab", "abc"] 
//strSubsets("ab") -> ["", "a", "b", "ab"]
// strSubsets("a") -> ["", "a"]
//strSubsets("") - > [""]


function strSubsets(str) {
    var allCombos = [];
    //do some work...recursive work!
    rFindAllCombos(allCombos, "", str, 0);
    return allCombos;
}

function rFindAllCombos(allCombos, curStr, originalStr, curIndex) {
    // 1) Add the current string to the list of all combos
    allCombos.push(curStr);

    // 2) Find out if we have finished processing all the letters
    if(curIndex >= originalStr.length) {
        return;
    }

    // 3) To recursively call itself, with the next set of combinations
    // "" -> "a","b","c"...."a" -> "ab","ac" ..... "ab" -> "abc".... "abc" -> STOP
    for(var index = curIndex; index<originalStr.length; index++) {
        rFindAllCombos(allCombos, curStr+originalStr[index], originalStr, index+1);

    }


}

console.log(strSubsets("abc"));