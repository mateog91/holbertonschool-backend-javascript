/* eslint no-param-reassign: ["error", { "props": false }] */

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);

  const newStudents = studentsByCity.map((student) => {
    for (const newGrade of newGrades) {
      if (newGrade.studentId === student.id) {
        student.grade = newGrade.grade;
        return student;
      }
    }
    // si llegamos a este punto es pq el id no esta en el array de newGrades
    student.grade = 'N/A';
    return student;
  });
  return newStudents;
}

