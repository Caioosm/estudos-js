// 705.484.645-25 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 6x 4x 5x
10  9  8  7  6  5  4  3  2
70  0 40 28 24 30 24 20 15 10 = 231
11 - (231 % 11) = 5
// se o numero digitado for maior que 9, o resultado é 0

cpf tem que ser string, validar cpf`s
como validar o cpf? o resultado da soma dos produtos de cada numero do cpf por numeros decrescentes ira dar um valor que, se dividido por 11 e subtraido de 11, tem que ser igual ao ultimo numero do cpf. O mesmo vale para o penultimo numero, entretanto, todo o calculo eh feito, agora, adicionando esse outro numero que foi calculado no cpf, e o numero de multiplicadores decrescentes aumenta em 1.
*/

function ValidaCPF(cpf){
    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            return cpf.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false; // verifica se o cpfLimpo existe
    if(this.cpfLimpo.length !== 11) return false;
    // verifica se todos os dígitos são iguais, o que é um cpf inválido
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2); // pega os 9 primeiros dígitos
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2;
    
    if(novoCpf !== this.cpfLimpo) return false;
    
    return true;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0)

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}


ValidaCPF.prototype.isSequencia = function(){
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

const cpf = new ValidaCPF('090.854.750-15');
console.log(cpf.valida());