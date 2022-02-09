(function () {
  var u = undefined;
  var n = null;
  var fun = function () {};

  var arr = [true, false];
  var obj = { 1: 1, 2: 2 };

  var date = new Date();
  var regex = /xyz/;

  var testArr = [u, n, fun, arr, obj, date, regex];
  var testObj = { u, n, fun, arr, obj, date, regex };

  // 浅拷贝
  // JSON.parse(JSON.stringify(testObj)) 是深拷贝，但是有缺陷，undefined, 函数类型的值被忽略了，等等
  {
    console.log(
      '数组的浅拷贝 =>',
      testArr.slice(),
      testArr.slice(0),
      testArr.concat(),
      testArr.concat([]),
      [...testArr]
    );
    console.log('对象的浅拷贝 =>', { ...testObj }, Object.assign({}, testObj));
    //
    //
    console.error(
      '用JSON方法 深拷贝的缺陷 =>',
      JSON.parse(JSON.stringify(testArr)),
      JSON.parse(JSON.stringify(testObj))
    );
  }

  // https://mp.weixin.qq.com/s/oDZTiplBVubpi7TCehAKbA // ! good 深拷贝的递归方式
  function myDeepClone(source) {
    if (source instanceof Date || source instanceof RegExp) {
      return new source.constructor(source); // ! .的优先级更高
    } else if (typeof source !== 'object' || source === null) {
      return source;
    }

    const target = new source.constructor(); // ! good 兼容了 Array, Object 类型
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = myDeepClone(source[prop]);
      }
    }
    return target;
  }

  console.log('testArr, testObj =>', testArr, testObj);
  console.log('myDeepClone =>', myDeepClone(testArr), myDeepClone(testObj));

  testArr[3][2] = 2020;
  testObj.obj[2] = 2020;
})();
