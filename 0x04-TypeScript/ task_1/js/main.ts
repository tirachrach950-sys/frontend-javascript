interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  
  // Index signature: allows any string key, with a value of 'any'.
  [key: string]: any; 
}
