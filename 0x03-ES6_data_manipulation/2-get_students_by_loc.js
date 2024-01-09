export default function getStudentsByLocation(listOfStudent, city) {
  const newArray = listOfStudent.filter((listOfStudent) => listOfStudent.location === city);
  return newArray;
}
