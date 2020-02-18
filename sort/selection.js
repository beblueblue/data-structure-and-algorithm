import { swap } from "./sort-common";

/**
 * 选择排序
 * 时间复杂度：O(N^2)
 * 空间复杂度：O(1)
 * 不稳定
 * 原地排序（in-place）
 * @param {Array} arr 
 */
export function selectionSort(arr = []) {
  const array = Array.from(arr);
  const length = array.length;

  // 从左向右扫描
  for(let left = 0; left < length; left++) {
    let selection = left;

    // 获取最小值索引
    for(let right = left + 1; right < length; right++) {
      if(array[selection] > array[right]) {
        selection = right;
      }
    }

    // 将最小值插入最左边
    // 这个操作可能会破坏稳定性，所以此算法不稳定
    if(selection !== left) {
      swap(array, left, selection);
    }
  }

  return array;
}