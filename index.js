// Write your solution in this file!

let employee = {
    name: '', 
    streetAddress: ''

}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee}

    newObject[key] = value
    return newObject;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    // const newObject = Object.assign({}, employee)
    const newObject = { ...employee }
    delete newObject[key]
    return newObject;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    Object.assign({}, employee)
    delete employee[key]

    return employee;
}