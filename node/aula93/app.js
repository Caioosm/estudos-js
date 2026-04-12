const axios = require('axios');

axios('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        const users = response.data;
        users.forEach(user => {
            console.log(`Nome: ${user.name}, Email: ${user.email}`);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar os usuários:', error);
    });