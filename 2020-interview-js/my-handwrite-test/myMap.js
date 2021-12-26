(function() {
    Array.prototype.myMap = function(callback) {
        if (!Array.isArray(this) || typeof callback !== 'function') {
            throw new Error('...');
        }

        var result = [];
        for (var i = 0, len = this.length; i < len; i++) {
            result.push(callback(this[i], i, this));
        }
        return result;
    };

    // test x3
    console.warn('test myMap = = = = = = = = = = = = = = = = = = =');

    var value = [1, 2, 3];
    var foo = function(item, index, arr) {
        return `item => ${item}, index => ${index}`;
    };

    var result = value.myMap(foo);
    var result2 = value.map(foo);

    console.log('myMap result => ', result);
    console.log('myMap2 result2 => ', result2);

})();
