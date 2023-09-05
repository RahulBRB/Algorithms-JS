function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16];
const targetElement = 10;
const resultIndex = binarySearch(sortedArray, targetElement);

if (resultIndex !== -1) {
  console.log(`Element ${targetElement} found at index ${resultIndex}`);
} else {
  console.log(`Element ${targetElement} not found in the array`);
}
