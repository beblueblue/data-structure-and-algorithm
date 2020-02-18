/**
 * 交换数组位置
 * @param {Array} arr 
 * @param {Number} from 
 * @param {Number} to 
 */
export function swap(arr = [], from, to) {
  [arr[from], arr[to]] = [arr[to], arr[from]];
}
/**
 * 返回[min, max]间的随机整数
 * @param {*} min 
 * @param {*} max 
 */
export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}