<?php

class Employee {
    public $id;
    public $name;
    public $position;
    public $dateOfBirth;
    public $salary;
    public $salaryCurrency;
    public $contractValidUntil;
}

class Parser {
    public $data;
    public $data2;

    public function __construct()
    {
        $this->data = file_get_contents('db/employees-db.json');
        $this->data2 = file_get_contents('db/contracts-db.json');
    }

    public function get() {
        header('Content-Type: application/json; charset=utf-8');

        $temp = [];
        foreach(json_decode($this->data) as $employee) {
            foreach(json_decode($this->data2) as $contract) {
                if ($employee->id === $contract->employeeId) {
                    $tmpEmployee = new Employee();

                    $tmpEmployee->id = $employee->id;
                    $tmpEmployee->name  = $employee->name;
                    $tmpEmployee->position  = $employee->position;
                    $tmpEmployee->dateOfBirth  = $employee->dateOfBirth;
                    $tmpEmployee->salary  = $contract->salary;
                    $tmpEmployee->salaryCurrency  = $contract->salaryCurrency;
                    $tmpEmployee->contractValidUntil  = $contract->contractValidUntil;

                    array_push($temp, $tmpEmployee);
                }
            }
        }

        return $temp;
    }
}