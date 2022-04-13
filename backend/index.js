const express = require('express')
const app = express()
const fs = require('fs');

app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/getEmployees', (req, res) => {
  fs.readFile('../db/employees-db.json', 'utf8', (err, data) => {
    fs.readFile('../db/contracts-db.json', 'utf8', (err, contractsData) => {

      const employees = JSON.parse(data);
      const contracts = JSON.parse(contractsData);

      for(let i = 0; i < employees.length; i++) {
        contracts.map((contract) => {
          if(employees[i].id === contract.employeeId) {
            employees[i].salary  = contract.salary;
            employees[i].salaryCurrency  = contract.salaryCurrency;
            employees[i].contractValidUntil  = contract.contractValidUntil;
          }
        })
      }

      res.send(employees)
    })
  })
})

app.listen(3000, () => {
  console.log("Server ready on: localhost:3000");
});

