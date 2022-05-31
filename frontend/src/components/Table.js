import React from "react";
import { Link } from "react-router-dom";

function Table({ currentEmployees, contracts }) {
  return (
    <table className={"table"}>
    <tr className={"table__header"}>
        <th>Name</th>
        <th>Position</th>
        <th>Date</th>
        <th>Salary</th>
        <th>Contract</th>
    </tr>
    {currentEmployees.map((employee, index) => {
    return contracts.map((contract) =>
        employee.id === contract.employeeId ? (
                <tr key={index} className={"table__row"}>   
                    <Link to={`/employee/${employee.id}`}><td>{employee.name}</td></Link>
                    <td>{employee.position}</td>
                    <td>
                        {new Date(employee.dateOfBirth).getDate() + 
                        "/" + new Date(employee.dateOfBirth).getMonth() + 
                        "/" + new Date(employee.dateOfBirth).getFullYear()}
                    </td>
                    <td>{contract.salary}</td>
                    <td>
                    {new Date(contract.contractValidUntil).getDate() +
                        "/" +
                        new Date(contract.contractValidUntil).getMonth() +
                        "/" +
                        new Date(contract.contractValidUntil).getFullYear()}
                    </td>
                </tr>

        ) : null
    );
    })}
    </table>
  )
}

export { Table };
