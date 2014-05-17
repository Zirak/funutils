/*global require, describe, it*/

var fun = require('../fun'),
    should = require('chai').should();

describe('Argument handling', function () {
	describe('flipArgs', function () {
		var retArgs = function () { return [].slice.call(arguments); };

		it('should do its job', function () {
			var flipped = fun.flipArgs(retArgs);
			flipped(1, 2, 3).should.eql([3, 2, 1]);

			var flippedSub = fun.flipArgs(fun.sub);
			flippedSub(3, 2).should.equal(2 - 3);
		});
	});

	describe('Partial argument binding', function () {
		// TODO. not yet implemented as well.
	});
});
