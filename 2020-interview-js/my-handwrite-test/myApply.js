(function() {
    Function.prototype.myApply = function(context, args) {

        context = context || window;
        if (typeof context !== 'object' && typeof context !== 'function') { // 可以不加第二个判断条件
            context = Object.create(null);
        }
        if (!Array.isArray(args)) {
            args = args || [];
        }

        const fun = Symbol();
        context[fun] = this;
        context[fun](...args);
        delete context[fun];
    };

    Function.prototype.myCall = function(context, ...args) {

        context = context || window;
        if (typeof context !== 'object' && typeof context !== 'function') { // 可以不加第二个判断条件
            context = Object.create(null);
        }

        const fun = Symbol();
        context[fun] = this;
        context[fun](...args);
        delete context[fun];
    };

    // test
    console.warn('test myApply =>');

    var name = 'window.name';
    var obj = {
        name: 'obj.name'
    };
    var foo = function() {
        console.log('foo() arguments =>', arguments);
        console.log(arguments[0] + ' =>', this, this.name);
    };

    foo.myApply(); // TODO ? ? window.name = ''

    foo.myApply(obj, ['test myApply', 1, 2, 3]);
    foo.myCall(obj, 'test myCall', 1, 2, 3);

    console.warn('test myApply => => =>');

})();
