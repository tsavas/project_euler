// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.


function test_prime(n) {
    for (var i = 3; i < n; i += 2) {
        if (n % i === 0) {
            return false;
        }
        // console.log(i);
    }
    return true;
}


function prime_sum(max) {

    var sum = 2;

    for (var j = 3; j < max; j += 2) {
        if (test_prime(j)) {
            sum += j;

        }

    }
    return sum;

}