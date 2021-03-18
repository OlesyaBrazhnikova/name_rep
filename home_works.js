
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
/**end HOME WORK 1.2**/

/**start HOME WORK 1.3**/
function formatOfBytes(bytes) {
	let unit = ['Byte', 'KB', 'MB', 'GB'];
	let count = 1024;
	const result = Math.floor(Math.log(bytes) / Math.log(count));
	return parseFloat((bytes/ Math.pow(count, result)).toFixed(2)) + ' ' + unit[result];
}
console.log(formatOfBytes('5000000'));

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
// циклами!!!
// function reverseString(word) {
// 		return word.split('').reverse().join('');
// };
// console.log(reverseString("dlrow olleh"));
/** end HOME WORK 2.1 **/