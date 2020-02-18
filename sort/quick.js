import { swap, getRandomIntInclusive } from "./sort-common";
/**
 * 快速排序
 * 时间复杂度：O(N*log(N))
 * 空间复杂度：O(1)
 * 不稳定
 * 原地算法（in-place）
 * @param { Array } array 
 * @param { Number } low 
 * @param { Number } high 
 */
export function quickSort(array = [], low = 0, high = array.length - 1){
  if(low < high) {
    const partitionIndex = partition(array, low, high);
    quickSort(array, low, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, high);
  }
  return array;
}

// 单向扫描
function partition(arr, left, right){
  // 缓存主元，选取最左侧
  const pivot = arr[left];
  let pivotIndex = left;
  for(let current = left + 1; current <= right; current++){
    if(arr[current] < pivot) {
      pivotIndex += 1;
      swap(arr, current, pivotIndex);
    }
  }
  swap(arr, left, pivotIndex);
  return pivotIndex;
}
// 双向扫描
function partition2(arr, left, right) {
  // 缓存主元，选取最左侧
  const pivot = arr[left];
  // 缓存扫描索引
  let i = left + 1;
  let j = right;
  while(true) {
    // 从左向右扫描
    while(i <= j && arr[i] <= pivot) {
      i++;
    }
    // 从右向左扫描
    while(i <= j && arr[j] >= pivot) {
      j--;
    }
    if(i >= j) {
      break;
    }
    swap(arr, i, j);
  }
  swap(arr, j, left);
  return j;
}
// 随机主元
function randomPartition(arr, left, right) {
  const randomIndex = getRandomIntInclusive(left, right);
  swap(arr, left, randomIndex)
  return partition2(arr, left, right);
}
