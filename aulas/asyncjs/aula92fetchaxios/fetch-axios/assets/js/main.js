axios('pessoas.json')
    .then(response => carregaPessoasNaPagina(response.data))

function carregaPessoasNaPagina(json) {
    const table = document.createElement('table');

    for(let pessoas of json) {
        const tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerText = pessoas.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = pessoas.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = pessoas.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}