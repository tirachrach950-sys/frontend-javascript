// task_5/js/main.ts

// Interfaces with a "brand" for nominal typing
export interface MajorCredits {
  credits: number;
  _majorBrand: 'major'; // unique brand
}

export interface MinorCredits {
  credits: number;
  _minorBrand: 'minor'; // unique brand
}

// Function to sum major credits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'major'
  };
}

// Function to sum minor credits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'minor'
  };
}

// Example usage:
const major1: MajorCredits = { credits: 10, _majorBrand: 'major' };
const major2: MajorCredits = { credits: 15, _majorBrand: 'major' };
const minor1: MinorCredits = { credits: 5, _minorBrand: 'minor' };
const minor2: MinorCredits = { credits: 7, _minorBrand: 'minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 25, _ma_

