(function() {
    Array.prototype.myReduce = function(callback, initialValue) {
        if (!Array.isArray(this) || typeof callback !== 'function') {
            throw new Error('...');
        }

        var hasInitialValue = initialValue !== undefined;
        var result = hasInitialValue ? initialValue : this[0];

        for (var i = hasInitialValue ? 0 : 1, len = this.length; i < len; i++) {
            result = callback(result, this[i], i, this);
        }
        return result;
    };

    // test x3
    console.warn('test myReduce = = = = = = = = = = = = = = = = = = =');

    var value = [1, 2, 3];
    var foo = function(prev, curr, currIndex, origin) {
        return prev + curr;
    };

    var result = value.myReduce(foo, 100);
    var result_2 = value.myReduce(foo);

    var result2 = [].myReduce(foo, 100);
    var result2_2 = [].myReduce(foo);

    console.log('myReduce result =>', result, result_2);
    console.log('result2 =>', result2, result2_2);

})();
