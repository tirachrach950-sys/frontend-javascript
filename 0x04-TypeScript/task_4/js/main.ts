// task_4/js/main.ts

import { Subjects } from './subjects/Teacher';
import { Subjects as CppNS } from './subjects/Cpp';
import { Subjects as JavaNS } from './subjects/Java';
import { Subjects as ReactNS } from './subjects/React';
import { Subjects as SubjectNS } from './subjects/Subject';

// Create and export teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10
};

// Create and export subject instances
export const cpp: CppNS.Cpp = new CppNS.Cpp();
export const java: JavaNS.Java = new JavaNS.Java();
export const react: ReactNS.React = new ReactNS.React();

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

