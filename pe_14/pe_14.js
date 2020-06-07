// The following iterative sequence is defined for the set of 
// positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate 
// the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and 
// finishing at 1) contains 10 terms. Although it has not 
// been proved yet (Collatz Problem), it is thought that all 
// starting numbers finish at 1.

// Which starting number, under one million, produces the 
// longest chain?

// NOTE: Once the chain starts the terms are allowed to go 
// above one million.

//the answer is i, it's the starting number

// function underThis(max){

//  let chain = [];



//  for(i = 1; i <= max;);
// }


// odd = function(int) {
//     return (3 * int) - 1;
// }

// even = function(int) {
//     return (int / 2);
// }


//

const collatz = function(startValue) {

    let myArray = [startValue];

    for (i = startValue; i !== 1;) {
        // console.log(i);
        if (i % 2 === 0) {
            i = i / 2;
        } else {
            i = (i * 3) + 1;
        }

        myArray.push(i);

    }


    return myArray.length;
}


const checkLongest = function(input) {

    let largest = 1;
    let randomThing = "string";


    for (i = 3; i !== 5; i++) {
        console.log("i before if statement is", i);
        console.log("collatz(i) before if statement is,", collatz(i));
        console.log("largest before if statement is,", largest);
        console.log("is (collatz(i) >= largest)?", (collatz(i) >= largest));
        console.log("RandomThing before if is",randomThing);
        if (collatz(i) >= largest) {
            // largest = i;
            console.log("i after if is", i);
            console.log("collatz(i) after if is", collatz(i));
            console.log("largest after if is,", largest);
            console.log("RandomThing after if is",randomThing);
        }

    }
    return largest;


}




//if the product is equal to 1, stop
//if the the product isn't equal to 1, 
//check if it's even, if so run even
//else run odd
//push the result into a temporary array
//this will loop until it ends at 1
//you're left with an array


//check if the product is bigger than the last in the variable
//if it's bigger, replace it
//if it's smaller, don't replace it

//go all the way up to a starting an input number of 1 million