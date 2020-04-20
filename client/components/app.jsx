
import React from 'react';
import GradeTable from './gradeTable';
import PageTitle from './page-title';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.postGrades = this.postGrades.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getAverageGrade(grades) {
    let sum = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      sum += parseInt(this.state.grades[i].grade);
    }
    const average = Math.ceil(sum / this.state.grades.length);
    return average;
  }

  getGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }))
      .catch(error => console.error(error));
  }

  postGrades(data) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const newGrade = this.state.grades.concat(data);
        this.setState({ grades: newGrade });
      });
  }

  deleteGrade(gradeId) {
    const newGrades = [];
    this.state.grades.forEach((grade, index) => {
      if (grade.id !== gradeId) {
        newGrades.push(grade);
      }
    });
    fetch(`/api/grades/${gradeId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(gradeDeleted => this.setState({ grades: newGrades }))
      .catch(error => console.error(error));

  }

  render() {
    const grades = this.state.grades;
    return (
      <main>
        <PageTitle average={this.getAverageGrade(grades)}/>
        <div>
          <GradeTable grade={this.state.grades} deleteGrade={this.deleteGrade}/>
          <GradeForm onSubmit={this.postGrades}/>
        </div>
      </main>
    );
  }
}

export default App;
