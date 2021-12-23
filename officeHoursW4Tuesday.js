/*
String: In-Order Subsets
Create strSubsets(str). Return an array with every possible in-order character subset of str. 
The resultant array itself need not be in any specific order – 
it is the subset of letters in each string that must be in the same order as they were in the original string. 
Given "abc", return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).
*/

/*

Algorithm for strSubsets
1) allCombos = [], curStr = ""
2) allCombos.push(curStr)
3) recursively call the function with curStr + all letters to the right of curr
  a -> ab, ac, b -> bc, c -> 
*/

function strSubsets(str) {
    var allCombos = [];
    rFindAllCombos(allCombos,"",str, 0);
    return allCombos;
}

function rFindAllCombos(allCombos, curStr, originalStr, curIndex) {
    allCombos.push(curStr);
    if(curIndex >= originalStr.length) {
        return;
    }

    for(var index = curIndex; index <originalStr.length; index++) {
        rFindAllCombos(allCombos, curStr+originalStr[index], originalStr, index+1);
    }

}
console.log(strSubsets("abc"));
console.log(strSubsets("abcd"));