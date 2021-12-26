(function() {
    Function.prototype.myBind = function(context, ...outerArgs) {
        var that = this;

        context = context || window;
        if (typeof context !== 'object' && typeof context !== 'function') { // 可以不加第二个判断条件
            context = Object.create(null);
        }

        return function(...innerArgs) {
            that.apply(context, outerArgs.concat(innerArgs));
        };
    };

    // test
    console.warn('test myBind =>');

    var name_ = 'window.name';
    var obj = {
        name_: 'obj.name'
    };
    var foo = function() {
        console.log('test myBind =>', this.name_, arguments[0], arguments[1])
    };

    foo.myBind(null, 1, 2)(); // todo ?? 为啥读取不到window.name_, 但是不放在立即执行的函数表达式内是可以读取到的
    foo.myBind(window, 1, 2)();

    var myBindResult = foo.myBind(obj);
    myBindResult(1, 2);

    console.warn('test myBind => => =>');

})();
