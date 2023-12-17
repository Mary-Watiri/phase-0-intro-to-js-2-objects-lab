// Write your solution in this file!

const employee = {
    name: "Marie",
    streetAdress: "Nakuru 01217",
}

function updateEmployeeWithKeyAndValue() {
    
    const employee_1 = {
        name : "Sam",
        streetAddress : "11 Broadway",
    }
    const totalEmployees = {...employee , ...employee_1};
    return totalEmployees;
}


function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey () {
    const employee_2 = {
        age: "24",
        gender : "male",
        height : "5'6",


    }

    const {race, ...employee_3} = employee_2;
    return employee_3;
}


function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}