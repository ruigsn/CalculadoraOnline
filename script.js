let result = '';

function addToResult(value) {
	result += value;
	document.getElementById('result').value = result;
}

function clearResult() {
	result = '';
	document.getElementById('result').value = '';
}

function operate(operator) {
	result += operator;
	document.getElementById('result').value = result;
}

function calculate() {
	document.getElementById('result').value = eval(result);
}
