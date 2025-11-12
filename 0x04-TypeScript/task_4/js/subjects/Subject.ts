// task_4/js/subjects/Subject.ts
export namespace Subjects {
  // Teacher interface
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  // Subject class
  export class Subject {
    teacher: Teacher;

    // Explicitly typed setter method
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
