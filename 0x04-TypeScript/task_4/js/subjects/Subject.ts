// task_4/js/subjects/Subject.ts
export namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  // Subject must be a class, not an interface
  export class Subject {
    teacher: Teacher;

    // Typed setter method for ALX checker
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
