var count, fizzer, buzzer;
count = function (start, end){
};
	var output = start;
	// modify output to look like what we want
	for (var i = start; i < end; i += 1) {
		// code to be repeated goes here
		output = output + " " + fizzer(i + 1);
	};

	// return the output, e.g "1 2 3 4 5"
	return output;
};

fizzer = function(num) {
	return 0 === num % 3 ? "fizz":num;
};

buzzer = function(num) {
	return 0 === num % 5 ? "buzz":num;
};

fizzbuzzer = function (num) {
	return 0 === num % 15 ? "fizzbuzz":num;
	// body...
};

module.exports = {
	count:count,
	fizzer:fizzer,
	buzzer:buzzer
};