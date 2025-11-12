// task_4/js/subjects/Java.ts

import { Subjects } from './Teacher';
import { Subjects as SubjectNS } from './Subject';

export namespace Subjects {
  // Extend Teacher interface with experienceTeachingJava
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends SubjectNS.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher?.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

