// A palindromic number reads the same both ways
// The largest palindrome made from the product of 
// two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product 
// of two 3-digit numbers.


myPalindromes = [];


const reverseNumber = function(n) {

let string = n.toString()

// console.log(string);

let split = string.split('');

// console.log(split);

let reversed = split.reverse();

// console.log(reversed);

let joined = reversed.join('');

// console.log('joined = ',joined);

let parsed = parseFloat(joined);

// console.log('original number = ',n);
// console.log('reversed number = ',parsed);

if(parsed == n){
	// console.log("PALINDROME!",n, i, j);
	myPalindromes.push(n);
	// console.log(myPalindromes);
	}
}



for (j = 999; j > 99; j--){


	for(i = 999; i > 99; i--){

		// console.log('i=',i);
		// console.log('i-1=',i-1);
		// console.log('i*i=',i*i);
		// console.log('i*(i-1)=',i*(i-1));
		// reverseNumber(i*i);
		// reverseNumber(i*(i-1));
		reverseNumber(j*i);

	}
}

// console.log(myPalindromes.sort(function(a, b){return a-b}));

console.log(myPalindromes.sort(function(a, b){return b-a}));
	
// 9 x 9 (i x i)
// 9 x 8 (i x i-1)
// // 8 x 9
// 8 x 8 (i-1 x i-1)
// // 8 x 7
// 7 x 8 (i-2 x i-1)

// 7 x 7 (i-2 x i-2)

// 6 x 7 (i-3 x i-2)

