/* eslint-disable no-unused-vars */
import React from 'react';
import GradeTable from './gradeTable';
import PageTitle from './page-title';

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

  getAverageGrade() {
    var grades = this.state.grades;
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }
    const average = sum / grades.length;
    return Math.round(average);
  }

  getGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: data });
        this.getAverageGrade();
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <main>
        <PageTitle/>
        <div>
          <GradeTable grade={this.state.grades}/>
        </div>
      </main>
    );
  }
}

export default App;
