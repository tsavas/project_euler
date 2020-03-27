// Each new term in the Fibonacci sequence is generated 
// by adding the previous two terms. By starting with 1 and 2, 
// the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose 
// values do not exceed four million, find the sum of the 
// even-valued terms.



//try logging a fib sequence;

// const myArray = [1, 2, 3];
// sum = 0


// for(let i = 1; i < 18; i++){

// 	let secondValue = myArray[myArray.length - 2];
// 	let firstValue = myArray[myArray.length - 1];
// 	let fib = secondValue + firstValue;

// 	if(fib % 2 === 0){
// 		 sum =+ fib;
// 		}
	
// 	myArray.push(fib);

// }


// console.log(myArray);
// console.log(sum);

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const myArray = [1, 2];
let even_sum = 2;

//keep running this as long as all values are less than 4million
// let fib = 0;

while(myArray[myArray.length - 1] < 4000000){
// for(let i = 1; i < 18; i++){

	let secondValue = myArray[myArray.length - 2];
	let firstValue = myArray[myArray.length - 1];
	let fib = secondValue + firstValue;

	if(fib % 2 === 0 && fib < 4000000){
		 even_sum += fib;
		}
	// console.log(sum);
	myArray.push(fib);
	// console.log('this is the fib:', fib);
	// console.log('this is the even_sum:', even_sum);

}

//console.log('this is the array:', myArray);
console.log('this is the even_sum:', even_sum);

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


// 2
// 1+2=3

// // 2+3

// start with 2
// add the two numbers before 2 in the sequence to 2
// store that value in an array


//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//////this works below////

// const myArray = [1, 2, 3, 9, 2];

// f = myArray[(myArray.length-1)] + myArray[(myArray.length-2)];


// for(let i = 1; i < 50; i++);

// console.log(f);

// myArray.push(f);

// console.log(myArray);


//////this works above////
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


// const myArray = [1, 2, 3, 5, 6];


// let secondValue = myArray[myArray.length - 2];
// let firstValue = myArray[myArray.length - 1];

// console.log(firstValue, secondValue);




// console.log(myArray.length);

// console.log(myArray[0]);

// console.log(myArray[myArray.length]);

// m = myArray[(myArray.length)] + myArray[(myArray.length-1)];

// console.log(m);

// myArray.push(m);

// console.log(myArray);




// for(let i = 1; i < 98; i++){

// 	console.log(myArray.length)

// 	// if(j % 2 == 0){
	
// 	myArray.push(i);

// 	// }
// }

// console.log(myArray);







