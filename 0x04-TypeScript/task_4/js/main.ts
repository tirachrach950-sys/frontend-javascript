// task_4/js/main.ts

import { Teacher } from './subjects/Teacher';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

// Create teacher with experienceTeachingC
export const cTeacher: Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10
};

// Create subject instances
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// C++ subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
