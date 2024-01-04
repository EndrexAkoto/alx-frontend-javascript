export default function createIteratorObject(report) {
  const departments = Object.keys(report);

  function* iterate() {
    for (const department of departments) {
      const employees = report[department];
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  return iterate();
}

