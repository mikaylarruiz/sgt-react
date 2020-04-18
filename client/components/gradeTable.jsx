import React from 'react';

function Grade(props) {
  const grade = props.grade;
  // const idAttr = `grade${grade.id}`;
  return (
    <tr>
      <td name={grade.name}>{grade.name}</td>
      <td course={grade.course}>{grade.course}</td>
      <td grade={grade.grade}>{grade.grade}</td>
      <td></td>

    </tr>
  );
}

function GradeTable(props) {
  return (
    <table className="table col-8">
      <thead>
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody id="grade-table">
        {
          props.grade.map(grade => {
            return (
              <Grade
                key={grade.id}
                name={grade.name}
                course={grade.course}
                grade={grade}/>
            );
          })
        }
      </tbody>
    </table>
  );
}
export default GradeTable;
