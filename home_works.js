
/**start HOME WORK 1.1**/
let result = +prompt('Enter the number', 0);
switch(result) {
    case 0: alert('zero'); break;
    case 1: alert('one'); break;
    case 2: alert('two'); break;
    case 3: alert('three'); break;
    case 4: alert('four'); break;
    case 5: alert('five'); break;
    case 6: alert('six'); break;
    case 7: alert('seven'); break;
    case 8: alert('eight'); break;
    case 9: alert('nine');
}

if (result === 0) {
    alert('zero');
} else if (result === 1) {
    alert('one');
} else if (result === 2) {
    alert('two');
} else if (result === 3) {
    alert('three');
} else if (result === 4) {
    alert('four');
} else if (result === 5) {
    alert('five');
} else if (result === 6) {
    alert('six');
} else if (result === 7) {
    alert('seven');
} else if (result === 8) {
    alert('eight');
} else if (result === 9) {
    alert('nine');
} else {
    alert('There are not such numbers');
}
/**end HOME WORK 1.1**/

/**start HOME WORK 1.2**/
let currentNum = 0;
if (currentNum === 0) {
	console.log('zero');
} else if (currentNum < 0) {
	console.log('negative Number');
} else if (currentNum > 0) {
	console.log('positive Number');
};
/**end HOME WORK 1.2**/

/**start HOME WORK 1.3**/
function transformToBytes(value, unit) {
	let unit_lowercase = unit.toLowerCase();
	let bytes = ' bytes';
	let count = 1024;
	switch(value, unit_lowercase) {
			case 'byte':
					console.log(value + bytes);
					break;
			case 'kb':
					console.log((value * count) + bytes);
					break;
			case 'mb':
					console.log(value * (Math.pow(count, 2)) + bytes);
					break;
			case 'gb':
					console.log(value * (Math.pow(count, 3)) + bytes);
					break;
			default:
					console.log('Not found');
	}
}
transformToBytes(10, 'GB');

/**end HOME WORK 1.3**/

/**start HOME WORK 1.4**/
let credit_percent = .2;
let credit_volume = 100000;
let credit_month = 48;
let percent_per_year = credit_volume * credit_percent;
let percentMonth = (percent_per_year / 12) + (credit_volume / credit_month);
let totalSum = percentMonth * credit_month;
let totalPercent = totalSum - credit_volume;
console.log(percent_per_year);  //sum of percent per year
console.log(totalSum); //total sum of credit with percent
console.log(totalPercent); //sum of percent during all years

let year = 12;
let monthes = 48;
let percent = 20;
let sum = 100000;
var totalMonth, totalMonth_round;
var total = Number(0);
for (i = 1; i <= monthes; i++) {
	 totalMonth = sum *(( percent / year) / 100);
	 totalMonth_round = +Math.round(totalMonth * 100) / 100;
	 total += totalMonth_round;
}
total = Math.round(total + sum);
let percentTotal = total - sum;
let percentYear = totalMonth * year;
console.log(percentYear);  //sum of percent per year
console.log(total); //total sum of credit with percent
console.log(percentTotal); //sum of percent during all years
/**end HOME WORK 1.4**/

/** start HOME WORK 2.1 **/
let str = 'olleh';
let reverseStr = '';
for(let i = str.length - 1; i >= 0; i--){
	reverseStr += str[i]
}
console.log(reverseStr);
/** end HOME WORK 2.1 **/

/** start HOME WORK 2.2 **/
let currentNumber = prompt('Enter an integer number');
let result = 1;
for (i = 0; i < currentNumber; i++){
    result = result * (currentNumber - i);
}
console.log(currentNumber + '! = ' + result);
/** end HOME WORK 2.2 **/

/** start HOME WORK 2.3 **/
let num = 10;
nextPrime:
for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}
/** end HOME WORK 2.3 **/

/** start HOME WORK 2.4 **/
let number = 10;
let sum = 0;
for (let i = 0; i <= number; i++) {
	if (i % 2 === 0) {
		sum += i;
	}
}
console.log(sum);
/** end HOME WORK 2.4 **/

/** start HOME WORK 2.5 **/
let num = 300;
for (let i = 301; i > num; i++) {
	if(! (num % 17)) {
		console.log(num); 
		break;
	}
	num++; 
}
/** end HOME WORK 2.5 **/

/** start HOME WORK 2.6 **/
let maxDivider = function(firstNum, secondNum) {
  if (!secondNum) {
    return firstNum;
  }
  return maxDivider(secondNum, firstNum % secondNum);
}
console.log(maxDivider(10,30));
/** end HOME WORK 2.6 **/




/** start HOME WORK 3.1 **/
		/* START вывод строки в обратном порядке 2.1*/
function reverseStr(str) {
  let templateStr = '';
  for(let i = str.length - 1; i >= 0; i--){
		templateStr += str[i]
  }
  return templateStr
}
console.log(reverseString('dlrow olleh'));

function reverseString(word) {
		return word.split('').reverse().join('');
};
console.log(reverseString("dlrow olleh"));
		/* END вывод строки в обратном порядке 2.1*/

		/* START факториалчисла 2.2*/
		function  findFactorial(num) {
			for(var i = num-1; i >= 1; i--){
					num = num * i;
			}
			return num;     
		}
		console.log( findFactorial(5))
		/* END факториалчисла 2.2*/

		/* START вывод строки в обратном порядке 2.4*/

		function summ(number) {
			let sum = 0;
			for (let i = 0; i <= number; i++) {
		
				if (i % 2 === 0) {
					sum += i;
				}
			}
			return sum;
		}
		
		console.log( summ(10) );
		console.log( summ(5) );
		console.log( summ(6) );

		/* END вывод строки в обратном порядке 2.4*/


		/* START определить положительное значение, отрицательное и ноль 1.2*/
function definePositiveNegativeZero(num) {
	if (Math.sign(num) === 1) {
		console.log('Positive number');
	} else if (Math.sign(num) === -1)  {
		console.log('Negative number');
	} else if (Math.sign(num) === 0) {
		console.log('Zero');
	}
}
definePositiveNegativeZero('0');
definePositiveNegativeZero('3');
definePositiveNegativeZero('-7');
		/* START определить положительное значение, отрицательное и ноль 1.2*/		

/** end HOME WORK 3.1 **/


/** start HOME WORK 3.2 **/
		/* START факториалчисла 2.2*/
function findFactorial(currentNum, result){
	result = result || 1;
	if(!currentNum){
			return result;
	} else {
			return findFactorial(currentNum-1, result * currentNum);
	}
}
console.log(findFactorial(5, 0));
		/* END факториал числа 2.2*/

		/* START максимальный делитель двух чисел 2.6 */
let maxDivider = function(firstNum, secondNum) {
  if (!secondNum) {
    return firstNum;
  }
  return maxDivider(secondNum, firstNum % secondNum);
}
console.log(maxDivider(10,30));
		/* END максимальный делитель двух чисел 2.6 */

/** end HOME WORK 3.2 **/


/** start HOME WORK 3.3 **/
function transpose(arr) {
        let arr_length = arr.length;
        let elem_arr = arr[0].length;
        let new_arr = [];
        for (let i = 0; i < elem_arr; i++) {
            new_arr[i] = [];
            for (let j = 0; j < arr_length; j++) {
                new_arr[i][j] = arr[j][i];
            }
        }
        console.log(new_arr);
    }
    transpose([[1,2,3],[4,5,6], [7,8,9]]);
/** end HOME WORK 3.3 **/

/** start HOME WORK 3.4 **/
function multiplyMatrix(matrix_1, matrix_2) {
	let new_arr = [];
	let rows_matrix_1 = matrix_1.length, cols_matrix_1 = matrix_1[0].length,
			rows_matrix_2 = matrix_2.length, cols_matrix_2 = matrix_2[0].length;
	if (cols_matrix_1 != rows_matrix_2) return false;
	for (let i = 0; i < rows_matrix_1; i++) {
			new_arr[i] = [];
	}
	for (let k = 0; k < cols_matrix_2; k++) {
			for (let i = 0; i < rows_matrix_1; i++) {
					let temp = 0;
					for (let j = 0; j < rows_matrix_2; j++) {
							temp += matrix_1[i][j] * matrix_2[j][k];
					}
					new_arr[i][k] = temp;
			}
	}
	console.log(new_arr);
}
multiplyMatrix([
	[1,2,3],
	[4,5,6],
	[7,8,9]], [
			[1,1,1],
			[2,2,2],
			[3,3,3]],
);
/** end HOME WORK 3.4 **/

/** start HOME WORK 3.5 **/
		/** ROW **/
let arr = [[1,2], [3,4], [5,6]];
let result = {
		targetIndex: 0,
		sum: 0,
}
for(let i = 0; i < arr.length; i++) {
		let currentSum = arr[i].reduce(function(prev, current) {return prev + current});
		if (result.sum <= currentSum) {
				result.sum = currentSum;
				result.targetIndex = i;
		}
}
console.log(result.targetIndex, result.sum);


let arr = [[20,2,100], [3,400,1], [5,6,1]];
let totalSum = 0, idx = 0;
for(let i = 0; i < arr.length; i++) {
		let currentSum = 0;
		for(let j = 0; j < arr[i].length; j++) {
				currentSum += arr[i][j];
		} if(totalSum < currentSum) {
				totalSum = currentSum;
				idx = i;
		}
}
console.log(totalSum, idx);

/** COLUMN **/
let arr = [[2,2,1,50], [3,4,1,5], [5,6,30,67]];
let indexes = arr[0].map(function (el, i) {return i} );
let result = indexes.reduce(function (acc, cur){
				let currentSum = arr.reduce(function (prev, current) {
					return prev + current[cur]
				}, 0);
				if (currentSum > acc.sum) {
						acc.targetIndex = cur;
						acc.sum = currentSum;
				}
				return acc;
		},
		{
				targetIndex: 0,
				sum: 0,
		}
);
console.log(result.targetIndex)
/** end HOME WORK 3.5 **/