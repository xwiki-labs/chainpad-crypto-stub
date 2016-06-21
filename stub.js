(function () {
    var Stub = {
        encrypt: function (x) { return x; },
        decrypt: function (x) { return x; },
        parseKey: function () { return {cryptKey: ''}; }
    };

    if (typeof(module) !== 'undefined' && module.exports) {
        module.exports = Stub;
    } else if ((typeof(define) !== 'undefined' && define !== null) && (define.amd !== null)) {
        define(function () {
            return Stub;
        });
    } else {
        window.CRYPTPAD_CRYPTO_STUB = Stub;
    }
}());
