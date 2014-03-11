var should = require('should');
var zequal = require('../index.js');

describe('Zequal', function () {
	// Testing 25*357
	describe('25*347 # Diff: 1825', function () {
		it('25 should zequal 30', function () {
			should(zequal(25)).equal(30);
		});
		it('347 should zequal 350', function () {
			should(zequal(25)).equal(30);
		});
		it('zequal(30*350) should zequal 10500', function () {
			should(zequal(30*350)).equal(10500);
		});
	});
	// Testing 1234.5789 * 98765.4321
	describe('1234.5789*98765.4321 # Diff: ', function () {
		var one = 1234.5789;
		var two = 98765.4321;
		it(one + ' should zequal 98770', function () {
			should(zequal(one)).equal(1240);
		});
		it(two + ' should zequal 350', function () {
			should(zequal(two)).equal(98770);
		});
		it('zequal(30*350) should zequal 10500', function () {
			should(zequal(98770*98770)).equal(9755512900);
		});
	});
});