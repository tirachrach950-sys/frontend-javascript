interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 20,
  location: 'London'
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Johnson',
  age: 22,
  location: 'Paris'
};

const studentsList: Student[] = [student1, student2];

// Render table in Vanilla JS
const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);
