const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas'];

const removidos = nomes.splice(1, Number.MAX_VALUE); // Remove o elemento na posição 2 (Pedro)
console.log(nomes); // Saída: ['João', 'Maria', 'Ana', 'Lucas']
console.log(removidos); // Saída: ['Pedro']