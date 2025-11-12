// Interfaces for employees
export interface Director {
  name: string;
  salary: number;
  workDirectorTasks(): string;
}

export interface Teacher {
  name: string;
  salary: number;
  workTeacherTasks(): string;
}

export type Employee = Director | Teacher;

// Type predicate to check if an employee is a Director
export function isDirector(employee: Employee): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function that executes work based on employee type
export function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();   // ✅ must return
  } else {
    return (employee as Teacher).workTeacherTasks(); // ✅ must return
  }
}

// Factory function to create employees
export function createEmployee(salary: number): Employee {
  if (salary < 500) {
    return {
      name: "Teacher Employee",
      salary,
      workTeacherTasks: () => "Getting to work",
    };
  } else {
    return {
      name: "Director Employee",
      salary,
      workDirectorTasks: () => "Getting to director tasks",
    };
  }
}

// Example usage
console.log(executeWork(createEmployee(200)));  // Output: Getting to work
console.log(executeWork(createEmployee(1000))); // Output: Getting to director tasks
