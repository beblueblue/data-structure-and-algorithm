/**
 * 插入排序
 * 时间复杂度：O(N^2)
 * 空间复杂度：O(1)
 * 稳定
 * 原地算法（in-place）
 * @param {Array} arr 
 */
export function insertionSort(arr = []) {
  const array = Array.from(arr);
  const length = array.length;

  // 从左向右扫描
  for (let right = 1; right < length; right++) {
    // 缓存末位置的值
    const temp = array[right];
    let left = right;

    for (; left > 0 && array[left - 1] > temp; left--) {
      // 大值右移
      array[left] = array[left - 1];
    }
    // 将缓存值插入中间位置
    array[left] = temp;
  }

  return array;
}