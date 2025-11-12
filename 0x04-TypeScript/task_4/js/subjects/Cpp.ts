// task_4/js/subjects/Cpp.ts

import { Subjects } from './Teacher';
import { Subjects as SubjectNS } from './Subject';

export namespace Subjects {
  // Extend Teacher interface with experienceTeachingC
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends SubjectNS.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher?.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

