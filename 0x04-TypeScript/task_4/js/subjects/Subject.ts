// task_4/js/subjects/Subject.ts
export namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    teacher: Teacher;

    // Explicitly typed setter for ALX
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
