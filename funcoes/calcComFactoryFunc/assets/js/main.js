function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        clearDisplay() {
            this.display.value = '';
        },

        btnValueToDisplay(value) {
            this.display.value += value;
        },
        
        delButton() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculate() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            }catch(e) {
                alert('Conta inválida');
                return;
            }
        },
        
        getClickButtons(){
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnValueToDisplay(el.innerText);
                }
                // verificar se o botão clicado é o de limpar o display
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                // verificar se o botão clicado é o de calcular a expressão
                if(el.classList.contains('btn-eq')) {
                    this.calculate();
                }
                // verificar se o botão clicado é o de apagar um número
                if(el.classList.contains('btn-del')) {
                    this.delButton();
                }
            });
        },

        pressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.key === 'Enter') {
                    this.calculate();
                }
            });
        },
        
        inicia(){
            this.getClickButtons();
            this.pressEnter();
        },
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();