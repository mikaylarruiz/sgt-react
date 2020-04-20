import React from 'react';

function Grade(props) {
  const grade = props.grade;
  return (
    <tr>
      <td name={grade.name}>{grade.name}</td>
      <td course={grade.course}>{grade.course}</td>
      <td grade={grade.grade}>{grade.grade}</td>
      <td>
        <button onClick={() => props.deleteGrade(grade.id)}> Delete</button>
      </td>

    </tr>
  );
}

function GradeTable(props) {
  const deleteGrade = props.deleteGrade;
  return (
    <table className="table col-8">
      <thead>
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scopr='col'>Operation</th>
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
                grade={grade}
                deleteGrade={deleteGrade}/>
            );
          })
        }
      </tbody>
    </table>
  );
}
export default GradeTable;
