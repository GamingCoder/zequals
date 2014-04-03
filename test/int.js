var test = require('tape');
var zequal = require('../index.js');

// 0-9
test('0-9', function(t) {
	t.plan(9);
	for (var i = 0; i < 9; i++) {
		t.equal(zequal(i), i);
	};
});

// 10-99
test('10-1000', function(t) {
	t.plan(990);
	for (var i = 10; i < 1000; i++) {
		var first = parseInt(i.toString()[0]);
		var second = parseInt(i.toString()[1]);

		var ten = Math.pow(10, i.toString().length-1);

		if(second < 5) t.equal(zequal(i), first*ten);
		else t.equal(zequal(i), (first+1)*ten);
	};
});