/*global require, describe, it*/

var fun = require('../fun'),
    should = require('chai').should();

describe('Boolean logic', function () {
    describe('not', function () {
        var isEven = function (x) { return !(x % 2); };
        var isOdd = fun.not(isEven);

        it('should do its job', function () {
            var arr = [4, 17, 2, 809];
            arr.filter(isOdd).should.eql([17, 809]);

            var t = fun.const(true),
                f = fun.not(t);

            t().should.not.equal(f);
            // This may be confusing.
            t().should.equal(fun.not(f)());
        });
    });

    var largerThan50 = function (x) { return x > 50; };
    var smallerThan100 = function (x) { return x < 100; };
    var smallerThan200 = function (x) { return x < 200; };

    var arr = [53, 17, 67, 281, 224, 284, 88, 44, 8, 37, 287];

    describe('and', function () {
        // Help me I'm stuck in a test factory.
        var withinRange = fun.and(largerThan50, smallerThan100);

        arr.filter(withinRange).should.eql([53, 67, 88]);

        arr.filter(fun.not(withinRange))
           .should.eql([17, 281, 224, 284, 44, 8, 37, 287]);
    });

    describe('or', function () {
        var withinRange = fun.or(fun.not(largerThan50), fun.not(smallerThan100));

        arr.filter(withinRange).should.eql([17, 281, 224, 284, 44, 8, 37, 287]);
        arr.filter(fun.not(withinRange)).should.eql([53, 67, 88]);
    });
});
