// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


//To start let's setup a simple function for testing if a number is prime

function test_prime(n) {
    for (var i = 3; i < n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

//Next we need to figure out the highest prime factor of a number
//This function returns the highest prime factor of a number
//We start iterating beginnging from the highest possible
//prime factor which is the square root of the number in question
//Otherwise the processing time is way too long

const highestPrimeFactor = function(x) {
    let prime_factors = [];
    for (j = Math.ceil(Math.sqrt(x)); j >= 1; j--) {
        if (x % j === 0) {
            if (test_prime(j)) {
                return j;
            }
        }
    }
}