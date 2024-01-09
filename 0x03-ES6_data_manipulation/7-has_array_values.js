export default function hasValuesFromArray(set, array) {
  let exist = true;
  array.forEach((elm) => {
    if (!set.has(elm)) {
      exist = false;
    }
  });
  return exist;
}
