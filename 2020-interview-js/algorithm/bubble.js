(() => {
  // https://www.bilibili.com/video/BV1ek4y1r7GT?p=7 1小时03分钟
  // 冒泡排序 // todo 有点难啊

  function bubbleSort(arr) {
    let temp = null;
    const len = arr.length;

    // 外层循环i 控制比较的轮数
    for (let i = 0; i < len - 1; i++) {
      // 里层循环j 控制每一轮比较的次数
      for (let j = 0; j < len - 1 - i; j++) {
        console.log('i =>', i, 'j =>', j, '上一轮数组结果 =>', arr[j], arr[j + 1], arr);
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        // console.warn(arr);
      }
    }

    return arr;
  }

  const test = [1, 13, 4, 5];
  const result = bubbleSort(test);
  console.log('bubbleSort result =>', result);

  //
  // 1、比较相邻的两个元素，如果前一个比后一个大，则交换位置。
  // 2、比较完第一轮的时候，最后一个元素是最大的元素。
  // 3、这时候最后一个元素是最大的，所以最后一个元素就不需要参与比较大小。
})();
