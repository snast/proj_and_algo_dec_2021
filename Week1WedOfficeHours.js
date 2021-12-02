/*
https://www.codewars.com/kata/5571f712ddf00b54420000ee

Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, 
and returns a dictionary/hash which shows the least amount of coins used to make up that amount. 
The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). 
Therefor the dictionary returned should contain exactly 4 key/value pairs.

Notes:

If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
If a float is passed into the function, its value should be be rounded down, and the resulting dictionary should never contain fractions of a coin.


loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}
loose_change(4) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}
looseChange(0) ==> {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}


*/

function looseChange(cents) {
    var coins = {
        'Nickels':0,
        'Pennies':0,
        'Dimes':0,
        'Quarters':0
    }

    if(cents > 0) {
        cents = Math.floor(cents);
        // 75 cents / 25 = 3 quarters
        numOfQuarters = Math.floor(cents/25);
        coins['Quarters'] = numOfQuarters;
        cents -= numOfQuarters * 25;

        numOfDimes = Math.floor(cents/10);
        coins['Dimes'] = numOfDimes;
        cents -= numOfDimes * 10;

        numOfNickels = Math.floor(cents/5);
        coins['Nickels'] = numOfNickels;
        cents -= numOfNickels * 5;

        coins['Pennies'] = cents;

    } 

    return coins;

    // Math.floor(2.3) = > 2
}

// coins['Nickels']  => 0
// coins['Nickels'] ++;
console.log("Loose change of 0");
console.log(looseChange(0));

console.log("Loose change of 11");
console.log(looseChange(11));

console.log("Loose change of 11.2");
console.log(looseChange(11.2));

console.log("Loose change of -435");
console.log(looseChange(-435));