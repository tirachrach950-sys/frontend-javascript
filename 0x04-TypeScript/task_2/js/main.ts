// Interfaces for employees
interface Director {
  name: string;
  salary: number;
}

interface Teacher {
  name: string;
  salary: number;
}

type Employee = Director | Teacher;

// Functions that simulate work tasks
function workDirectorTasks(): void {
  console.log("Getting to director tasks");
}

function workTeacherTasks(): void {
  console.log("Getting to work");
}

// Factory function to create employees based on salary
function createEmployee(salary: number): Employee {
  if (salary < 500) {
    return { name: "Teacher Employee", salary } as Teacher;
  } else {
    return { name: "Director Employee", salary } as Director;
  }
}

// Type predicate to check if an employee is a Director
function isDirector(employee: Employee): employee is Director {
  return employee.salary >= 500;
}

// Function that executes work based on employee type
function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    workDirectorTasks();
  } else {
    workTeacherTasks();
  }
}

// Example usage
executeWork(createEmployee(200));  // Output: Getting to work
executeWork(createEmployee(1000)); // Output: Getting to director tasks

