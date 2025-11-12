interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'London',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Paris',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
interface Directors extends Teacher {
  numberOfReports: number;
}
// Define the interface for the function signature
interface printTeacherFunction {
  (name: TeacherName): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (name) => {
  // Extract the first letter of firstName and append a period, a space, and the full lastName
  const firstInitial = name.firstName.charAt(0);
  return `${firstInitial}. ${name.lastName}`;
};

// Example Usage (for testing purposes):
const teacher = { firstName: "John", lastName: "Doe" };
console.log(printTeacher(teacher)); // Output: J. Doe

const teacher2 = { firstName: "Jane", lastName: "Smith" };
console.log(printTeacher(teacher2)); // Output: J. Smith

const result = printTeacher("John", "Doe");
console.log(result); // Output: John Doe
