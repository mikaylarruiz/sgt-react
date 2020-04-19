import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });

  }

  handleChangeCourse(event) {
    this.setState({ course: event.target.value });
  }

  handleChangeGrade(event) {
    this.setState({ grade: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.reset();
  }

  reset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <aside className="col-4">
        <form className=" pr-0" onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input name="name" type="text" value={this.state.name} className="form-control col-10" placeholder="Student Name" aria-label="Student's Name" onChange={this.handleChangeName}></input>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="far fa-list-alt"></i></span>
            </div>
            <input name="course" type="text" value={this.state.course} className="form-control col-10" placeholder="Student Course" aria-label="Student's Course" onChange={this.handleChangeCourse}></input>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
            </div>
            <input name="grade" type="number" value={this.state.grade} className="form-control col-10" placeholder="Student Grade" aria-label="Student's Grade" onChange={this.handleChangeGrade}></input>
          </div>
          <button type="submit" className="btn btn-success mr-2">Add</button>
          <button type="reset" onClick={this.reset} className="btn btn-outline-secondary">Cancel</button>
        </form>
      </aside>
    );
  }
}

export default GradeForm;
