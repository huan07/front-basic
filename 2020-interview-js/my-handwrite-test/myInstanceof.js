(function() {
    var myInstanceof = function(obj, constructor) {
        var _prototype = constructor.prototype;

        while (obj) {
            if (obj === _prototype) {
                return true;
            }
            obj = Object.getPrototypeOf(obj);
        }
        return false;
    };

    // test x3
    console.warn('test myInstanceof = = = = = = = = = = = = = = = = = = =');

    var arr = [];
    var obj = {};

    var result = myInstanceof(arr, Array);
    var result_2 = myInstanceof(arr, Object);

    var result2 = myInstanceof(obj, Object);

    var result3 = myInstanceof(null, Object);

    var result4 = myInstanceof('', Object);

    console.log('myInstanceof result =>', result, result_2, result2, result3);
    console.log(result4);

})();
