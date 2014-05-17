/*global require, describe, it*/

var fun = require('../fun'),
    should = require('chai').should();

describe('Basic functions', function () {
    var args = [4, {}, { a : 4 }, null, false, undefined, new Boolean];

    describe('id', function () {
        it('should always return the first argument', function () {
            args.forEach(function (x) {
                should.equal(fun.id(x), x);
            });

            should.equal(fun.id.apply(fun, args), args[0]);

            should.not.exist(fun.id());
        });

        it('should not care about the this object', function () {
            args.forEach(function (x) {
                should.equal(fun.id(x), fun.id.call({}, x));
            });

            should.equal(fun.id.apply(fun , args),
                         fun.id.apply(null, args));
        });
    });

    describe('const', function () {
        it('should return a function', function () {
            args.forEach(function (c) {
                fun.const(c).should.be.a('function');
            });
        });

        it('should return the constant', function () {
            args.forEach(function (c) {
                var k = fun.const(c);

                for (var i = 0; i < 10; i += 1) {
					should.equal(k(), c);
                }
            });

            var undef = fun.const();
            should.not.exist(undef());
        });

        it('should not care about the this object', function () {
            args.forEach(function (c) {
                var k = fun.const(c);

                for (var i = 0; i < 10; i += 1) {
					should.equal(k.apply({}), c);
                }
            });

            var undef = fun.const();
            should.not.exist(undef.apply({}));
        });
    });

	describe('exists', function () {
		it('should detect null and undefined', function () {
			fun.exists(null).should.not.be.ok;
			fun.exists(undefined).should.not.be.ok;
		});

		it('should not trip on falsy values', function () {
			var falsies = [0, false, '', NaN];

			falsies.forEach(function (falsy) {
				fun.exists(falsy).should.be.ok;
			});
		});

		it('should not trip on truthy values', function () {
			var truthys = [4, true, 'blah', new Boolean, {}, [1], true];

			truthys.forEach(function (truthy) {
				fun.exists(truthy).should.be.ok;
			});
		});
	});
});
