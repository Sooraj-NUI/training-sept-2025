// 5. Return the highest-paid person per department.
// const employees = [
//   { name: "Raj", dept: "IT", salary: 600 },
//   { name: "Arun", dept: "IT", salary: 750 },
//   { name: "Deepak", dept: "HR", salary: 500 }
// ];
// highestSalary(employees);
// Output: { IT: {name:"Jane", salary:750}, HR: {name: "Deepak", salary: 500} }

const employees = [
  { name: "Raj", dept: "IT", salary: 600 },
  { name: "Arun", dept: "IT", salary: 750 },
  { name: "Deepak", dept: "HR", salary: 500 },
  { name: "Deepak", dept: "HR", salary: 1000 },
];

function findHighestPaidPersonPerDepartment(employeeDetails) {
  if (!Array.isArray(employeeDetails)) {
    console.error("Input must be an array");
    return {};
  }

  let highestPaidPersons = {};
  for (let i = 0; i < employeeDetails.length; i++) {
    const employee = employeeDetails[i];

    if (!employee) {
      console.error("Invalid employee object");
      return {};
    }

    if (typeof employee.dept !== "string") {
      console.error("employee department must be a string value");
      return {};
    }

    if (typeof employee.name !== "string") {
      console.error("employee name must be a string");
      return {};
    }

    if (typeof employee.salary !== "number") {
      console.error("exployee salary must be a number");
      return {};
    }
    console.log(employeeDetails[i].dept);
    const employeeDepartment = employeeDetails[i].dept;
    console.log(employee);
    console.log(employeeDepartment);
    if (highestPaidPersons[employeeDepartment] === undefined) {
      highestPaidPersons[employeeDepartment] = {
        name: employee.name,
        salary: employee.salary,
      };
    } else {
      if (employee.salary > highestPaidPersons[employeeDepartment].salary) {
        highestPaidPersons[employeeDepartment] = {
          name: employee.name,
          salary: employee.salary,
        };
      }
    }
  }
  return highestPaidPersons;
}
console.log(findHighestPaidPersonPerDepartment(employees));
