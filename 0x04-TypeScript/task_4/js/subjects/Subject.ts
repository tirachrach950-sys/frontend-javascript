// task_4/js/subjects/Subject.ts
export namespace Subjects {
  // Teacher interface
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  // Subject class (not interface)
  export class Subject {
    teacher: Teacher;

    // ALX expects this exact method signature
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
