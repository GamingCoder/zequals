exports = module.exports = function (num){
	// Always round one time first
	var r = Math.round(num);
	// 10 to the power of x
	var ten = Math.pow(10, r.toString().length-1);
	
	

	return Math.round(r/ten)*ten;
};