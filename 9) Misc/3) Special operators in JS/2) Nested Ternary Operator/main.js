function check_number(n) {
	return n > 0 ? "Pos" : n < 0 ? "Neg" : "Zero";
}
console.log(check_number(2));
console.log(check_number(0));
console.log(check_number(-2));
