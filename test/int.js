var test = require('tape');
var zequal = require('../index.js');

// 0-9
test('0-9 should zequal 0-9', function(t) {
	t.plan(9);
	for (var i = 0; i < 9; i++) {
		t.equal(zequal(i), i);
	};
});