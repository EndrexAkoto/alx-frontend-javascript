export default function getListStudentIds(arrayOfObjects) {
  if (arrayOfObjects instanceof Array) {
    const newArray = arrayOfObjects.map((obj) => obj.id);
    return newArray;
  }
  return [];
}
