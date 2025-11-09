// Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Director Interface
interface Director extends Teacher {
  numberOfReports: number;
}

// printTeacher interface and function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// StudentClass interfaces
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassMethods {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassMethods {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const teacher1: Teacher = { firstName: "John", lastName: "Doe", fullTimeEmployee: true, location: "London", contract: false };
const director1: Director = { firstName: "Alice", lastName: "Smith", fullTimeEmployee: true, location: "Paris", numberOfReports: 17 };
const student1 = new StudentClass("Bob", "Brown");

console.log(printTeacher(teacher1.firstName, teacher1.lastName));
console.log(student1.displayName(), student1.workOnHomework());
console.log(director1);
// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function declaration (must be named exactly "printTeacher")
function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + '. ' + lastName;
}

// Example usage
console.log(printTeacher("John", "Doe")); // J. Doe
