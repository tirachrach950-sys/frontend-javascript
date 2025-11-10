// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface (ALX requires EXACT name "Directors")
interface Directors extends Teacher {
  numberOfReports: number;
}

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function requirement: must contain function printTeacher(...)
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Student constructor interface
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Student methods interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Student class
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
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
