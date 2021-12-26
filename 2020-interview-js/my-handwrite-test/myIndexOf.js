(function() {
    // https://www.bilibili.com/video/BV1aE411C7pt?p=5
    String.prototype.myIndexOf = function(childStr) { // todo xx 代码量太多，不推荐用
        if (Object.prototype.toString.call(this) !== '[object String]') {
            return -1;
        }
        if (typeof childStr !== 'string') {
            return -1;
        }

        var thisLen = this.length;
        var childStrLen = childStr.length;
        var result = -1;
        if (thisLen < childStrLen) {
            return -1;
        }

        for (var i = 0; i < thisLen; i++) {

            console.log(this, this.substr(i, childStrLen))

            if (this.substr(i, childStrLen) === childStr) {
                result = i;
                break;
            }
        }
        return result;
    };

    String.prototype.myIndexOfBetter = function(childStr) { // todo better
        if (typeof childStr !== 'string') {
            return -1;
        }

        var reg = new RegExp(childStr);
        var matched = this.match(reg);

        console.log(reg, matched);

        return matched ? matched['index'] : -1;
    };

    // test x3
    console.warn('test myIndexOf = = = = = = = = = = = = = = = = = = =');

    var test = 'est';
    var result = 'testMyo'.myIndexOf(test);
    var result2 = 'tEstMyo'.myIndexOf(test);

    var result_ = 'testMyo'.myIndexOfBetter(test);
    var result2_ = 'tEstMyo'.myIndexOfBetter(test);

    console.log(result, result2);
    console.log(result_, result2_);

})();
