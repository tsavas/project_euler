// By listing the first six prime numbers: 
// 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?


function test_prime(n) {
    for (var i = 3; i < n; i += 2) {
        if (n % i === 0) {
            return false;
        }
        // console.log(i);
    }
    return true;
}


function prime_count(position) {			

    var sum = 1; 							//2 and 3 are prime, so we'll start the tally at position 1 (not 0);

    for (var j = 3; j < Infinity; j += 2) {
        if (test_prime(j)) {
            sum++;
            if (sum === position) {
                return j;
            }
        }

    }

}