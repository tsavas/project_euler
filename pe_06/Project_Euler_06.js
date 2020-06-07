
let run = function(n){

let sum = 0;

let SumSquares = 0;




for (i = 1; i <= n; i++){


	sum =+ sum + i
	
	SqSum = sum*sum;

	SumSquares += (i*i)

}



console.log('the sum of the squares is',SqSum);
console.log('the square of the sums is',SumSquares);
console.log('the difference between them is',SqSum - SumSquares);

}


run(100);