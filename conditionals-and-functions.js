//conditionals, Functions, loops

//Equals
let equals = 1 === 1;


//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

//greater then Equals
let greaterThenEq = 5 >= 5;

// Less Than Equals
let LessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 4.40;
let storeB = 1.40;

function compareStorePrices (storeA, storeB) {
	let storeAisLower = storeA < storeB;
	if(storeAisLower) {
		console.log("Store a has a lower price.")
	} else if(storeB < storeA) {
		console.log("store B has a lower price")
	} else {
		console.log("Their price are equal")
	}
}

//compareStorePrices(10, 5);
//compareStorePrices(7, 11);

//function squareNum(number) {
	//return number * number;
}
//let squaredNumber = squareNum(7);
//console.log(squaredNumber);

//*Scope
//let x = 10;

//function addNumbers(n, m, x) {
	//console.log(x);
	//let b;
	//if(1===1){
		//b = 8;
	}
	//console.log(b);
	//return n + m;
}
//addNumbers(1, 2, 10);

//*Arrays

//let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];

//let newArr = ourArray [4];
//console.log(newArr[0]);

//*loops
// (for loop)

//let ourArray = [1, 2, 3, 4, 5,6, 7];

//let arrLen = ourArray.length;
//for(let i = 0; i < arrLen; i++) {
//console.log("i is equal to: " + i);
//console.log(ourArray[i]);
//for(let j = 0; j<10; j++) {
//console.log('j is equal to: ' + j);
//}
}

// (while loop)

let x = 0;
while (x < 10){
	console.log('Ran');
	x = x + 1;
}




