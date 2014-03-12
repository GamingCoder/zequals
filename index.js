exports = module.exports = function (num){
	// Always round one time first
	var r = Math.round(num);
	// 10 to the power of x
	var x = 0;
	
	while(r.toString().length !== 1){
		x++;
		r = Math.round(r/10);
	}

	r = r * Math.pow(10, x);

	// if r==0 => r=1
	if (r === 0) r = 1;

	return r;
};