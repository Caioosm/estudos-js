function Calculadora() {
    this.display = document.querySelector('.display');

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.btnValueToDisplay = (value) => {
        this.display.value += value;
    }

    this.delButton = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.calculate = () => {
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
    }

    this.getClickButtons = () => {
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
    }

    this.pressEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if(e.keyCode === 13) {
                this.calculate();
            }
        });
    }
    
    this.inicia = () => {
        this.getClickButtons();
        this.pressEnter();
    }
    
}

const calculadora = new Calculadora();
calculadora.inicia();