import React from 'react';

function PageTitle(props) {
  return (
    <header className="row align-items-end mt-4 mb-4">
      <h1>Student Grade Table</h1>
      <h4 className="col text-right">Average Grade <span className="badge badge-primary">{props.average}</span></h4>
    </header>
  );
}

export default PageTitle;
