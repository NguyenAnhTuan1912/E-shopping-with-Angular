export default function getUniqueItemsFromArray(arr) {
  const newArr = [];
  for (let item of arr) {
    if (newArr.indexOf(item) === -1) newArr.push(item);
  }
  return newArr;
}
