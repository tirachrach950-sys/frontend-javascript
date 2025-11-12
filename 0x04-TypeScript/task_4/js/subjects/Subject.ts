// task_4/js/subjects/Subject.ts
export namespace Subjects {
  // Base Teacher interface
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  // Subject class
  export class Subject {
    // Teacher assigned to this subject
    teacher: Teacher;

    /**
     * Assign a teacher to this subject
     * @param teacher - an object implementing Teacher interface
     */
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
