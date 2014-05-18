/*global require, describe, it*/

var fun = require('../fun'),
    should = require('chai').should();

// I did not write this file with a smile on my face. It's basically just to
//make sure I didn't make a syntax error or the likes.

describe('Math', function () {
    var arr = [53, 17, 67, 281, 224, 284, 88, 44, 8, 37, 287];

    describe('add', function () {
        it('should do its job', function () {
            arr.reduce(fun.add).should.equal(1390);
        });
    });

    describe('sub', function () {
        it('should do its job', function () {
            arr.reduce(fun.sub).should.equal(-1284);
        });
    });

    describe('mult', function () {
        it('should fo its job', function () {
            arr.reduce(fun.mult).should.equal(354961481558556000000);
        });
    });

    describe('div', function () {
        it('should fo its job', function () {
            arr.reduce(fun.div).should.equal(7.913534695838865e-18);
        });
    });

    describe('floorDiv', function () {
        it('should do its job', function () {
            arr.reduce(fun.floorDiv).should.equal(0);
            fun.floorDiv(27, 4).should.equal(6);
        });
    });

    describe('mod', function () {
        it('should do its job', function () {
            arr.reduce(fun.mod).should.equal(2);
            fun.mod(27, 4).should.equal(3);
        });
    });
});
