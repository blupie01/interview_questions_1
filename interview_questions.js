// Level 1:
// Write a function named greatThanThree that takes in two numbers and returns true if they are both greater than 3 and false if not.

function greaterThanThree(n1, n2) {
	if (n1 > 3 && n2 > 3) {
		return true;
	} else return false;
};

// Write a function named aOrB that takes in a letter and if it is a or b then return true otherwise return false.
function aOrB(letter) {
	if (letter == "a" || letter == "b") {
		return true;
	} else return false;
};

// Write a function named greatThanTwo that returns true if the number is 2 and false otherwise
function greaterThanTwo(n) {
	if (2 < n) {
		return true;
	} else return false;
};

// Level 2:
// Write a function named printEvenBetween that takes in two numbers and will return an array of all the even numbers between the given two numbers.
function printEvenBetween(n1, n2) {
	var numArray = [];
	var startNum = n1 + 1;

	while (startNum < n2) {
		if (Math.abs(startNum) % 2 == 0) {
			numArray.push(startNum);
			startNum++;
		};
		startNum++;
	};
	return numArray;
};

// Write a function named printBetween that takes in two arguments. Assume they are integers. This function will return an array of the numbers 
//between those two arguments.
function printBetween(n1, n2) {
	var numArray =[];
	var startNum = n1 + 1;

	while (startNum < n2) {
		numArray.push(startNum);
		startNum++;
	};
	return numArray;
};

// Level 3:
// Write a function named fib that takes an argument n. Assume that n is a number.
// And the function returns an array of n numbers of the fibonacci sequence.
function fib(n) {
	// I'm assuming this only has positive numbers and starts at 0.
	var numArray = [0, 1];
	var index1 = 0;
	var index2 = 1;

	while (numArray.length < n) {
		var num = numArray[index1] + numArray[index2];
		numArray.push(num);
		index1++;
		index2++;
	};

	if (n === 0) {
		return [];
	} else if (n === 1) {
		return [0];
	} else if (n === 2) {
		return numArray;
	} else return numArray;
};
