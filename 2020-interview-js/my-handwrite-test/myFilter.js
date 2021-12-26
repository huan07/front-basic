(function() {
    Array.prototype.myFilter = function(callback) {
        if (!Array.isArray(this) || typeof callback !== 'function') {
            throw new Error('...');
        }

        var result = [];
        for (var i = 0, len = this.length; i < len; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    };

    // test x3
    console.warn('test myFilter = = = = = = = = = = = = = = = = = = =');

    var value = [1, 2, 3];
    var foo = function(item, index, arr) {
        return item >= 2;
    };

    var result = value.myFilter(foo);

    console.log('myFilter result => ', result);

})();
