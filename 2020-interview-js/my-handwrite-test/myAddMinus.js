(function() {
    function check(n) {
        n = Number(n); // todo ?? 这样写好吗，false / null 都被转换为0了
        return isNaN(n) ? 0 : n;
    }

    function add(n) {
        n = check(n); // todo better 需要校验下
        return this + n;
    }

    function minus(n) {
        n = check(n);
        return this - n;
    }

    Number.prototype.add = add;
    Number.prototype.minus = minus;

    // test x3
    console.warn('test myAddMinus = = = = = = = = = = = = = = = = = = =');

    var result = (4).add(5).minus(3);
    var result2 = (44).add(false).minus(true);

    console.log(result, result2);

})();
