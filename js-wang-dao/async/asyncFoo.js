/**
 * Created by yanghuan on 18/10/10.
 */

function asyncFoo(arg, callback) {
  console.log('参数为 ', arg);

  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log('完成：', value);
}
