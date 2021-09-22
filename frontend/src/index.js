import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Table() {
  let [state, setState] = useState([]);

  useEffect(() => {
    fetch('http://localhost/getEmployees')
      .then(res => res.json())
      .then(val => setState(val));
  }, []);

  let rows = [];
  state.forEach((val) => {
    rows.push(
      <tr>
        <td>{val.name}</td>
        <td>{val.position}</td>
        <td>{new Date(val.dateOfBirth).getDate() + '.' + new Date(val.dateOfBirth).getMonth() + '.' + new Date(val.dateOfBirth).getFullYear()}</td>
        <td>{val.salary + ' ' + val.salaryCurrency}</td>
        <td>{new Date(val.contractValidUntil).getDate() + '.' + new Date(val.contractValidUntil).getMonth() + '.' + new Date(val.contractValidUntil).getFullYear()}</td>
      </tr>
    );
  })

  return (
    <table id="table">
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Date of birth</th>
        <th>Salary</th>
        <th>Contract valid until</th>
      </tr>
      {rows}
    </table>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Table/>
  </React.StrictMode>,
  document.getElementById('root')
);

