export default function getStudentIdsSum(listOfStudent) {
  const sum = listOfStudent.reduce((total, listOfStudent) => total + listOfStudent.id, 0);
  return sum;
}
