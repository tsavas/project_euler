// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!


console.log("Hello");
var random = 10*9*8*7*6*5*4*3*2*1;
console.log(random);

let myNumber = 100;

let product = 1;

for(i = 1; i <= myNumber; i++){

	product *= i;
	

}

console.log("product is ",product);

let string = product.toString()

console.log('string is ',string);

let split = string.split('');

console.log('split is ', split);


let joined = split.join('');

console.log('joined is ', joined);

let finalSum = 0;

for(i = 0; i < joined.length; i++){

	
	console.log(joined[i]);
	let numified = parseFloat(joined[i]);
	console.log('numified is',numified);
	finalSum += numified;

	// joined.push(numified);
	// console.log('HERE!',joined);

}

	console.log('finalSum is',finalSum);



// let parsed = parseFloat(joined);

// console.log('parsed is ',parsed);

// console.log('original number = ',n);
// console.log('reversed number = ',parsed);