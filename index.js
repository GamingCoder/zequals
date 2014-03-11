exports = module.exports = function (num){
	var r = num;

	while((r%10) !== 0) {
		r = Math.round(r);
		r = Math.round(r/10)*10;
	}

	return r;
};