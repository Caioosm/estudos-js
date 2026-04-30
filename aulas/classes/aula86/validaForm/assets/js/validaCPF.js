class ValidaCPF {
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', {
            // get: function(){
            //     return cpf.replace(/\D+/g, '');
            // },
            value: cpf.replace(/\D+/g, ''),
            enumerable: false,
            writable: false,
            configurable: false
        });
    };


    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        const novoCpf = cpfSemDigitos + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }

    valida(){
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return 'false';
        if(!this.geraNovoCpf()) return false;

        return true;
    }
}