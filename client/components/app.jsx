/* eslint-disable no-console */
import React from 'react';

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
      .then(gradesData => this.setState({ gradesData }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <header className="row align-items-end mt-4 mb-4">
        <h1>Student Grade Table</h1>
      </header>
    );
  }
}

export default App;
