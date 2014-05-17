/*global require, describe, it*/

var fun = require('../fun'),
    should = require('chai').should();

describe('Object access', function () {
	describe('prop', function () {

		it('should do its job', function () {
			var args = ['blah', [4, 2, 1], { length : 4 }];

			var lengths = args.map(function (obj) {
				return obj.length;
			});
			var funLengths = args.map(fun.prop('length'));

			lengths.should.eql(funLengths);
		});
	});

	describe('invoke', function () {
		var args = ['FO5O', 'BAZ.INGA', 'SoMeThIng'];

		it('should do its job', function () {
			var lowercased = args.map(function (s) {
				return s.toLowerCase();
			});

			var funLowercased = args.map(fun.invoke('toLowerCase'));

			lowercased.should.eql(funLowercased);
		});

		it('should be able to accept parameters', function () {
			var matches = args.map(function (s) {
				return s.match(/[A-Z]+/g);
			});

			var funMatches = args.map(fun.invoke('match', /[A-Z]+/g));

			matches.should.eql(funMatches);
		});
	});
});
