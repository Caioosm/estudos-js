//IIFE - Imediately Invoked Function Expression
(function(idade, peso, altura){
    const sobrenome = 'Silva';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(20, 80, 1.80);