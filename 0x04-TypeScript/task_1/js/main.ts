interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

function createTeacher({
  firstName,
  lastName,
  fullTimeEmployee,
  yearsOfExperience,
  location,
  ...additionalAttributes
}: Teacher): Teacher {
  const teacher: Teacher = {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...additionalAttributes,
  };

  if (yearsOfExperience !== undefined) {
    teacher.yearsOfExperience = yearsOfExperience;
  }

  return teacher;
}

const teacher3: Teacher = createTeacher({
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
});

console.log(teacher3);

