import React, {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom'

const EmployeeDetails = () => {
    const [employee, setEmployee] = useState();

    const { id } = useParams();

    useEffect(() => {
        if(id){
        fetch(`http://localhost:8080/employees/${id}`)
        .then(res => res.json())
        .then(val => setEmployee(val));
        }

    },[id])

  return (
    <div className={'employee-details'}>
        {employee && (
            <div>
                <div>Name: {employee.name}</div>
                <div>Position: {employee.position}</div>
                <div>Date of birth: {new Date(employee.dateOfBirth).getDate() + "/" + new Date(employee.dateOfBirth).getMonth() + "/" + new Date(employee.dateOfBirth).getFullYear()}</div>
                <div>Postion:{employee.position}</div>
            </div>

        )}
    <Link to={'/'}>Back to list</Link>
    </div>
  )
}

export { EmployeeDetails };
