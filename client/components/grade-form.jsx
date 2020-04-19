import React from 'react';

function GradeForm(props) {
  return (
    <aside className="col-4">
      <form className=" pr-0">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-user"></i></span>
          </div>
          <input name="name" type="text" className="form-control col-10" placeholder="Student Name" aria-label="Student's Name"></input>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="far fa-list-alt"></i></span>
          </div>
          <input name="course" type="text" className="form-control col-10" placeholder="Student Course" aria-label="Student's Course"></input>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
          </div>
          <input name="grade" type="number" className="form-control col-10" placeholder="Student Grade" aria-label="Student's Grade"></input>
        </div>
        <button type="submit" className="btn btn-success mr-2">Add</button>
        <button type="reset" className="btn btn-outline-secondary">Cancel</button>
      </form>
    </aside>
  );
}

export default GradeForm;
