/*global module*/
var fun = {
    // Basic stuff.

    id : function (x) {
        return x;
    },

    const : function (c) {
        return function () {
            return c;
        };
    },

    exists : function (subject) {
        return subject !== null && subject !== undefined;
    },

    // Object access.

    prop : function (key) {
        return function (obj) {
            return obj[key];
        };
    },

    safeProp : function (key) {
        return function (obj) {
            if (fun.exists(obj)) {
                return obj[key];
            }

            return obj;
        };
    },

    invoke : function (key) {
        var args = [];

        for (var i = 1; i < arguments.length; i += 1) {
            args[i-1] = arguments[i];
        }

        return function (obj) {
            return obj[key].apply(obj, args);
        };
    },

    // Argument handling.

    flipArgs : function (func) {
        return function () {
            var args = [];

            for (var i = 0; i < arguments.length; i += 1) {
                args.unshift(arguments[i]);
            }

            return func.apply(this, args);
        };
    },

    // Boolean logic.
    not : function (func) {
        return function () {
            return !func.apply(this, arguments);
        };
    },

    and : function (f, g) {
        return function () {
            return f.apply(this, arguments) && g.apply(this, arguments);
        };
    },

    or : function (f, g) {
        return function () {
            return f.apply(this, arguments) || g.apply(this, arguments);
        };
    },

    // Those math things we always wanted.
    add : function (a, b) {
        return a + b;
    },

    sub : function (a, b) {
        return a - b;
    },

    mult : function (a, b) {
        return a * b;
    },

    div : function (a, b) {
        return a / b;
    },

    floorDiv : function (a, b) {
        return Math.floor(a / b);
    },

    mod : function (a, b) {
        return a % b;
    }
};

if (typeof module !== 'undefined') {
    module.exports = fun;
}
