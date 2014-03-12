var should = require('should');
var zequal = require('../index.js');

describe('Zequal', function () {
	// Testing 25*357
	describe('25*347', function () {
		it('25 should zequal 30', function () {
			should(zequal(25)).equal(30);
		});
		it('347 should zequal 400', function () {
			should(zequal(347)).equal(400);
		});
		it('zequal(30*400) should zequal 10000', function () {
			should(zequal(30*400)).equal(10000);
		});
	});
	// Testing 1234.5789 * 98765.4321
	describe('1234.5789*98765.4321', function () {
		var one = 1234.5789;
		var two = 98765.4321;
		it(one + ' should zequal 1000', function () {
			should(zequal(one)).equal(1000);
		});
		it(two + ' should zequal 100000', function () {
			should(zequal(two)).equal(100000);
		});
		it('zequal(1000*100000) should zequal 10000000000', function () {
			should(zequal(98770*98770)).equal(10000000000);
		});
	});
});