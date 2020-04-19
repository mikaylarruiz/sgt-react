/* eslint-disable no-unused-vars */
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
  }

  componentDidMount() {
    this.getGrades();
  }

  getAverageGrade(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }
    const average = sum / grades.length;
    return Math.ceil(average);
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
      headers: { 'Content-Type': 'aaplication/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        const newGrade = this.state.grades.concat(data);
        this.setState({ grades: newGrade });
      });
  }

  render() {
    const grades = this.state.grades;
    return (
      <main>
        <PageTitle average={this.getAverageGrade(grades)}/>
        <div>
          <GradeTable grade={this.state.grades}/>
          <GradeForm/>
        </div>
      </main>
    );
  }
}

export default App;
