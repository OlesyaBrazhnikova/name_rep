
/**start HOME WORK 1.1
 * Переменная хранит в себе значение от 0 до 9. Написать скрипт который будет выводить слово “один”,
 * если переменная хранит значение 1. Выводить слово “два” - если переменная хранит значение 2, и т.д.
 * для всех цифр от 0 до 9. Реализовать двумя способами.
 * **/
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

/**start HOME WORK 1.2
 * Переменная хранит в себе значение, напишите скрипт которое выводит информацию о том,
 * что число является нулевым либо положительным либо отрицательным.
**/
let currentNum = 0;
if (currentNum === 0) {
	console.log('zero');
} else if (currentNum < 0) {
	console.log('negative Number');
} else if (currentNum > 0) {
	console.log('positive Number');
};
/**end HOME WORK 1.2**/

/**start HOME WORK 1.3
 * Переменная хранит в себе единицу измерения одно из возможных значений (Byte, KB, MB, GB),
 * Вторая переменная хранит в себе целое число. 
 * В зависимости от того какая единица измерения написать скрипт, который выводит количество байт. 
 * Для вычисления принимает счет что в каждой последующей единицы измерения хранится 1024 единиц более меньшего измерения.
**/
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

/**start HOME WORK 1.4
 * Переменная хранит процент кредита, вторая переменная хранит объем тела кредита,
 * третья переменная хранит длительность кредитного договора в годах. Написать скрипт который вычислит:
Сколько процентов заплатит клиент за все время
Сколько процентов заплатит клиент за один календарный год
Какое общее количество денежных средств клиента банка выплатит за все года
**/
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

/** start HOME WORK 2.1
 * Переменная содержит в себе строку. Вывести строку в обратном порядке.**/
let str = 'olleh';
let reverseStr = '';
for(let i = str.length - 1; i >= 0; i--){
	reverseStr += str[i]
}
console.log(reverseStr);
/** end HOME WORK 2.1 **/

/** start HOME WORK 2.2
 * Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.**/
let currentNumber = prompt('Enter an integer number');
let result = 1;
for (i = 0; i < currentNumber; i++){
  result = result * (currentNumber - i);
}
console.log(currentNumber + '! = ' + result);
/** end HOME WORK 2.2 **/

/** start HOME WORK 2.3 
 * Дано число - вывести первые N делителей этого числа нацело.**/
let num = 10;
nextPrime:
for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}
/** end HOME WORK 2.3 **/

/** start HOME WORK 2.4
 * Найти сумму цифр числа которые кратны двум**/
let number = 10;
let sum = 0;
for (let i = 0; i <= number; i++) {
	if (i % 2 === 0) {
		sum += i;
	}
}
console.log(sum);
/** end HOME WORK 2.4 **/

/** start HOME WORK 2.5
 * Найти минимальное число которое больше 300 и нацело делиться на 17**/
let num = 300;
for (let i = 301; i > num; i++) {
	if(! (num % 17)) {
		console.log(num); 
		break;
	}
	num++; 
}
/** end HOME WORK 2.5 **/

/** start HOME WORK 2.6
 * Заданы две переменные для двух целых чисел, найти максимальное общее
 * значение которое нацело делит два заданных числа.**/
let maxDivider = function(firstNum, secondNum) {
  if (!secondNum) {
    return firstNum;
  }
  return maxDivider(secondNum, firstNum % secondNum);
}
console.log(maxDivider(10,30));
/** end HOME WORK 2.6 **/




/** start HOME WORK 3.1
 * Все скрипты которые писали в рамках первого и второго задания - оформить в виде функций**/
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


/** start HOME WORK 3.2
 * Все скрипты которые используют в своей основе цикл - 
 * написать с помощью рекурсивных функций**/
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


/** start HOME WORK 3.3
 * Написать функцию, которая транспонирует матрицу**/
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

/** start HOME WORK 3.4
 * Написать функцию, которая умножает две матрицы**/
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

/** start HOME WORK 3.5
 * Найти номер столбца двумерного массива сумма которого является максимальной (аналогично для строки)**/
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
},{
	targetIndex: 0,
	sum: 0,
});
console.log(result.targetIndex)
/** end HOME WORK 3.5 **/

/** start HOME WORK 3.6
 * Удалить из массива все столбцы которые не имеют ни одного нулевого элемента
 * и сумма которых положительна - оформить в виде функции*/
let mas = [
	[-3, 4, -2],
	[0, 1, 2],
	[2, 0, 3]
];
function cut(arr) {
	let columns = new Array(arr[0].length).fill(1);
	let res = [];
	for (let i = 0; i < arr[0].length; i++) {
		let sum = 0;
		for (let j = 0; j < arr.length; j++) {
			sum += arr[j][i];
		}
		if (sum >= 0) {
			columns[i] = false;
		}
	}
	for (let i = 0; i < arr.length; i++) {
		res.push([]);
		for (let j = 0; j < columns.length; j++) {
			if (columns[j]) {
				res[i].push(arr[i][j]);
			}
		}
	}
	return res;
}
cut(mas);
/** end HOME WORK 3.6*/

/** start HOME WORK 4.1
 * Написать функцию которая генерирует массив случайных значений,
 * таким образом что все элементы результирующего массива являются уникальными.
 * Генерациями происходит в рамках чисел от N до M, где N,M - могут быть как положительные
 * так и отрицательными, и еще одним параметром количество значений которые нужно сгенерировать.
 * Если количество генерируемых значений больше чем чисел в диапазоне - отдавать пустой массив.*/
let array = [3,-2,2,1,-1,1,2,3,-2];
function generateArr(arr) {
	let q = 10;
	for (let i = 0; i < arr.length; i++) {
		for(let j = i; j < arr.length; j++){
			if (arr.length <= q) {
				if(arr[i] > arr[j]){
					let temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			} else {
				return [];
			};
		}
	}
	return Array.from(new Set(arr));
}
let result = generateArr(array);
console.log(result);
/** end HOME WORK 4.1*/

/** start HOME WORK 4.2
 * Использовать функцию из предыдущего задания чтобы получить массив из нужного количества значений.
 * Найти процентное соотношение отрицательных, положительных и нулевых элементов массива.*/
function percentOf(arr) {
	let q = 10;
	if (arr.length <= q) {
		return arr
		.reduce((accum, current) => {
			if (current > 0) {
				accum[0]++;
			}
			else if (current === 0) {
				accum[1]++;
			}
			else accum[2]++;
			return accum;
		}, [0, 0, 0])
		.map(result => +(result / arr.length).toFixed(2));
	} else {
		alert('So long array');
	};
}
console.log(percentOf(array));
/** end HOME WORK 4.2*/

/** start HOME WORK 4.4
 * Задано предложение - подсчитать количество вхождений каждого слова в предложении.
 * Вывести список уникальных слов и напротив каждого слова - сколько раз встретилось*/
let string = 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit, Lorem ipsum dolor, Lorem ipsum, Lorem ';
let str = string.replace(/[^\w]/g, " ");
let split = str.split(" ");
let obj = {};
for (let item of split) {
	if (obj[item] === undefined) {
		obj[item] = 1;
	} else {
		obj[item]++;
	}
}
console.log(obj);
/** end HOME WORK 4.4*/

/** start HOME WORK 4.5
 * Написать рекурсивную функцию которая выводит абсолютно все элементы
 * ассоциативного массива (объекта) - любого уровня вложенности*/
let user = {
	name: 'Alex',
	surname: 'Petrov',
	blogger: {
		nickname: 'cat',
		age: 25,
		favourite_food: {
			1: 'borsch',
			2: {
				1: 'meat',
				2: {
					1: 'fish',
					2: {
						1: 'candies',
						2: {
							1: {
								1: 'apple',
								2: {
									1: 'borsch',
									2: 'meat',
									3: 'fish',
								},
							},
						},
					},
				},
			},
		},
	},
};
function getAllValue(obj) {
	getProperty(obj);
	
	function getProperty(o) {
		for(let prop in o) {
			if(typeof(o[prop]) === 'object') {
				getProperty(o[prop]);
			} else {
				console.log('Finite value: ',o[prop]);
			}
		}
	}
}
console.log(getAllValue(user));
/** end HOME WORK 4.5*/

/** start HOME WORK 5.1
* Задан двумерный массив - объединить каждый внутренний массив с верхнем массивом - только по уникальным значениям.
Например [1,2,4[8,4,12,],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3], получаем в результате: [1,2,4,8,12,13,29,11,0,5,3,6,7,21]*/
let array = [1,2,4,[8,4,12,],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3];
function uniqueOneArray(arr) {
	let newArray = arr.flat();
	let result = [];
	for (let item of newArray) {
		if (!result.includes(item)) {
			result.push(item);
		}
	}
	return result;
};
console.log(uniqueOneArray(array));
/** end HOME WORK 5.1*/

/** start HOME WORK 5.2
 * Написать функцию которая возвращает true/false в зависимости от того - все ли уникальные значения в массиве или есть не уникальные*/
let array = [1,2,4,5,6,7,3];
function isThereADuplicate(arr) {
	let counts = [];
	for(let item of arr) {
		if(counts[item] === undefined) {
			counts[item] = 1;
		} else {
			return true;
		}
	}
	return false;
}
console.log(isThereADuplicate(array));
/** end HOME WORK 5.2*/

/** start HOME WORK 5.3
 * Задан массив объектов студентов вида [{name: “Ivan”, estimate: 4, course: 1, active: true},
 * {name: “Ivan”, estimate: 3, course: 1, active: true},{name: “Ivan”, estimate: 2, course: 4, active: false},
 * {name: “Ivan”, estimate: 5, course: 2, active: true}] - заполнить его более большим количеством студентов.
 * Написать функцию которая возвращает: среднюю оценку студентов в разрезе каждого курса: {1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5}
 * с учетом только тех студентов которые активны. Посчитать количество неактивных студентов в разрезе каждого курса и общее количество неактивных студентов.*/
let students = [
	{
		name: 'Ivan',
		estimate: 4,
		course: 1,
		active: true
	},{
		name: 'Kate',
		estimate: 3,
		course: 1,
		active: true
	},{
		name: 'Alex',
		estimate: 2,
		course: 4,
		active: false
	},{
		name: 'Sergey',
		estimate: 5,
		course: 2,
		active: true
	},{
		name: 'Masha',
		estimate: 4,
		course: 3,
		active: true
	},{
		name: 'Lily',
		estimate: 2,
		course: 1,
		active: false
	},{
		name: 'Misha',
		estimate: 4,
		course: 3,
		active: true
	},{
		name: 'Ksenia',
		estimate: 5,
		course: 1,
		active: false
	},{
		name: 'Marina',
		estimate: 4,
		course: 4,
		active: true
	},{
		name: 'Ivan',
		estimate: 5,
		course: 1,
		active: true
	},{
		name: 'Kate',
		estimate: 3,
		course: 4,
		active: true
	},{
		name: 'Alex',
		estimate: 2,
		course: 3,
		active: false
	},{
		name: 'Sergey',
		estimate: 5,
		course: 2,
		active: true
	},{
		name: 'Masha',
		estimate: 4,
		course: 2,
		active: true
	},{
		name: 'Lily',
		estimate: 2,
		course: 5,
		active: true
	},{
		name: 'Misha',
		estimate: 4,
		course: 5,
		active: true
	},{
		name: 'Ksenia',
		estimate: 5,
		course: 5,
		active: false
},{
		name: 'Marina',
		estimate: 5,
		course: 4,
		active: true
},
];
function averageMark(std) {
	const res = {};
	let activeAll = 0;
	let notActiveAll = 0;
	std.forEach(val => {
		const key = val.course;
		if(val.active === true) {
			res[key] ? res[key] = (res[key] + val.estimate)/2 : res[key] = val.estimate;
			return activeAll++;
		} else {
			return notActiveAll++
		}
	});
	console.log('active: ' + activeAll);
	console.log('not active: ' + notActiveAll);
	return res;
}
console.log(averageMark(students));

function avrMarks(arr) {
	return arr.reduce((acc, val) => {
		const {course: key,active} = val;
		if (active) (acc[key] ? acc[key] = (acc[key] + val.estimate) / 2 : acc[key] = val.estimate);
		const keyForState = active ? 'active' : 'disabled'
		acc[keyForState] = acc[keyForState] + 1
		return acc;
	}, {active: 0, disabled: 0})
}
console.log(avrMarks(students), "new");
/** end HOME WORK 5.3*/