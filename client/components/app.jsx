/* eslint-disable no-console */
import React from 'react';
import GradeTable from './gradeTable';
import PageTitle from './page-title';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getGrades();
    console.log(this.state.grades);
  }

  getGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }))
      .catch(error => console.log(error));
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
