(function () {
  var myCurry = (fn, ...args) => {
    console.log(fn, args);

    if (fn.length > args.length) {
      // 参数长度不足时，重新柯里化该函数，等待接收新参数
      return function (...innerArgs) {
        console.error('innerArgs =>', innerArgs);

        return myCurry(fn, ...args, ...innerArgs);
      };
    } else {
      // 参数长度满足时，执行函数
      return fn.apply(null, args);
    }
  };

  function sumFun(a, b, c) {
    return a + b + c;
  }

  var sumFunCurry = myCurry(sumFun);

  console.log(sumFunCurry(1, 2, 3));
  console.log(sumFunCurry(1, 2, 3, 4, 5));
  console.log(sumFunCurry(1, 2)(3));
  console.log(sumFunCurry(1)(2, 3));
  console.log(sumFunCurry(1)(2)(3));
})();
