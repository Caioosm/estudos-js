const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

// const numeros = num1.concat(num2);

const numeros = [...num1, ...num2];


console.log(numeros); // Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]