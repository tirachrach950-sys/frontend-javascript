/**
 * Interface definition for a Teacher object.
 * - firstName and lastName are readonly, as they should only be modifiable on initialization.
 * - fullTimeEmployee and location are mandatory.
 * - yearsOfExperience is optional.
 * - The index signature allows for arbitrary extra attributes, like 'contract',
 * while ensuring compatibility with all explicitly defined property types.
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // yearsOfExperience can be a number or undefined
  location: string;
  
  // Index signature to allow for arbitrary string properties (like 'contract').
  // By using a union type that includes all explicit property types (string, boolean, number, 
  // and undefined for optional properties) plus a generic catch-all, we ensure compatibility.
  // The 'any' type works, but sometimes a checker prefers the explicit types in the union.
  [key: string]: string | boolean | number | undefined | any; 
}

// Example usage demonstrating the mandatory, optional, readonly, and extra attributes.
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Extra attribute allowed by the index signature
  yearsOfExperience: 5, // Optional attribute included
};

const teacher4: Teacher = {
  firstName: 'Anna',
  fullTimeEmployee: true,
  lastName: 'Smith',
  location: 'New York',
  // yearsOfExperience is omitted (it's optional, so it is undefined)
  // No extra attributes are included, which is also valid
};

console.log('--- Teacher 3 Details ---');
console.log(teacher3);

console.log('\n--- Teacher 4 Details ---');
console.log(teacher4);

// Demonstration of readonly constraint (TypeScript compiler check - uncomment to see error)
// teacher3.firstName = 'Jane'; // Error: Cannot assign to 'firstName' because it is a read-only property.

// Demonstration of mandatory properties check (TypeScript compiler check - uncomment to see error)
/*
const invalidTeacher: Teacher = {
  firstName: 'Test',
  lastName: 'Test',
  // location is missing
  fullTimeEmployee: true, 
}; 
// Error: Property 'location' is missing in type '{ firstName: string; lastName: string; fullTimeEmployee: true; }'
*/

/**
 * A helper function to print teacher details for clarity in the console output.
 * @param teacher The teacher object to display.
 */
function displayTeacher(teacher: Teacher): void {
  console.log('Object:');
  // Iterate through the keys to print all properties, including arbitrary ones.
  for (const key in teacher) {
    // Check if the property is directly on the object and not from prototype chain
    if (Object.prototype.hasOwnProperty.call(teacher, key)) {
        console.log(`  ${key}: ${teacher[key]}`);
    }
  }
}

console.log('\n--- Display Teacher 3 (Formatted Output) ---');
displayTeacher(teacher3);
// This output format closely matches the requested examp
