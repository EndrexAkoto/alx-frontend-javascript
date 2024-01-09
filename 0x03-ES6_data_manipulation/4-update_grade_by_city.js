/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(listOfStudent, city, newGrades) {
  const newArray = listOfStudent.filter((listOfStudent) => listOfStudent.location === city)
    .map((listOfStudent) => {
      newGrades.map((newGrades) => {
        if (newGrades.studentId === listOfStudent.id) {
          listOfStudent.grade = newGrades.grade;
        }
        if (!('grade' in listOfStudent)) {
          listOfStudent.grade = 'N/A';
        }
        return listOfStudent;
      });
      return listOfStudent;
    });
  return newArray;
}
