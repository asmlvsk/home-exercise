import React, { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { Spinner } from "../components/Spinner";
import { Table } from "../components/Table";

const PAGE_SIZE = 5;
const WIDTH = 200;

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [contracts, setContracts] = useState(false);
  const [loading, setLoading] = useState([]);
  const [employeesPerPage] = useState(PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    const fetchEmployees = () => {
        setLoading(true)
        fetch("http://localhost:8080/employees")
        .then((res) => res.json())
        .then((val) => setEmployees(val));
        setLoading(false)
    }
    const fetchContracts = () => {
        setLoading(true)
        fetch("http://localhost:8080/contracts")
        .then((res) => res.json())
        .then((val) => setContracts(val));
        setLoading(false)
    }

    fetchEmployees();
    fetchContracts();
  }, []);


  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if(loading){
    return <Spinner />
  }

  return (
    <div className={'employees'}>
        {employees && contracts && (
            <Table contracts={contracts} currentEmployees={currentEmployees} />
        )}
      <Pagination employeesPerPage={employeesPerPage} totalEmployees={employees.length} paginate={paginate} />
    </div>
  );
};

export { Employees };
