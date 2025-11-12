// task_4/js/subjects/React.ts

import { Subjects } from './Teacher';
import { Subjects as SubjectNS } from './Subject';

export namespace Subjects {
  // Extend Teacher interface with experienceTeachingReact
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends SubjectNS.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher?.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}

