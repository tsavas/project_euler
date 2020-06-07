// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

//find the first prime factor of 13195

//loop through all the numbers between 1 and 13195
//check to see if it is a factor of 13195
//check to see if it is then a prime number
//if it is a prime factor, print it in the console


//––––––maybe come back to this

// const primes = [2, 3];
// myLimit = 30;

// for(let i = 5; i < myLimit; i++){

// 	if(myLimit % i == 0){

// 		//console.log('this is i: ',i);

// 		for(let j = 0; j < primes.length; j++){
// 			if(primes[j] % primes[primes.length] == 0){
// 				console.log('this is j: ',j);
// 			} 
// 		}


// 		//primes.push(i);
// 	}
// }

// console.log('my primes array: ',primes);


//––––––maybe come back to this


//--this works well below

// const primes_almost = [2, 3];
// const primes_true = [];
// myLimit = 30;

// for(let i = 5; i < myLimit; i++){

// 	if(myLimit % i == 0){

// 		primes_almost.push(i);
// 	}
// }

// console.log('my primes array: ',primes_almost);

// for(let j = 0; j < primes_almost.length; j++){
// 	if(primes_almost[j] % 2 == 0){
// 		primes_true.push(primes_almost[j]);
// 		console.log(primes_almost[j]);
// 	}
// } 











//--this works well above
//--this is the one I'm working on below

const primes_almost = [2, 3];
const primes_true = [];
myLimit = 40;

for(let i = 5; i <= myLimit; i+=2){

	if(myLimit % i > 0){

		primes_almost.push(i);
		// console.log(i);
	}
}

// console.log('my primes_almost array: ',primes_almost);
// console.log('length of primes_almost is',primes_almost.length);

for(let j = 0; j <= primes_almost.length; j++){

	let p_a = primes_almost[j];

	// console.log('p_a is',p_a);

	for(let k = 1; k < p_a; k++){

		// console.log('k is',k);
		// console.log('p_a is',p_a);

		let k_a = primes_almost[k]

		if(p_a % k_a > 0){

		primes_true.push(p_a);
		// console.log(primes_true);
	}
	}





	//create a loop that starts with the first number
	//in the primes_almost array
	//increments to the next number in the primes almost array
	//and it stops at the number before 

	// if(p_a < 9){
	// 	console.log('numbers less than 9', p_a);


	// }
}
console.log(primes_true[primes_true.length-1])



// for(let j = primes_almost.length; j > primes_almost[1]; j--){

// 	if(primes_almost[j] % 2 == 0){
// 		primes_true.push(primes_almost[j]);
// 		console.log('this is primes_almost: 'primes_almost[j]);
// 	}
// } 




//starting with the largest number in the prime array//
//divide it by every other number before it in the prime array//

//log that in a new array if it has a decimal remainder//






// var luckyNumbers = [3, 5, 7, 9];
// for(var i = 0; i < luckyNumbers.length; i++) {
// 	//Let's take the constant factor as 2
// 	luckyNumbers[i] = luckyNumbers[i] * 2;
// }
// console.log(luckyNumbers);



// const factors= [];

// for(let i = 1; i < 13195; i++){

// 	if((13195 % i == 0) && (

// 		for(let j = 2; j < i; j++){

// 		(i % j == 0)

// 		}))

// // 	console.log(i);

// const myArray = []

// for(let i = 1; i < 13195; i++){

// 		for(let j = 2; j < i; j++){

// 		if(i % j == 0){

// 		}
// 	}
// }



// var text = "";
// var i = 0;
// do {
//   text += "The number is " + i;
//   i++;
// }
// while (i < 5);



// 		for(let )

// 	{

// 		// factors.push(i);

// 		console.log(i);
// 	}
// }

// console.log(factors);
