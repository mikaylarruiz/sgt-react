import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  getGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }

  render() {
    return (
      <header>
        Student Grade Table
      </header>
    );
  }
}

export default App;
