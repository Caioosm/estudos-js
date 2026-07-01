let x;
if(typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(firstName: string, lastName?: string) {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if(typeof x === 'number') return x * x;
  return null;
}

const squareOfNumber = squareOf(2);
const squareOfString = squareOf('sla');

console.log(squareOfNumber);
console.log(squareOfString);
