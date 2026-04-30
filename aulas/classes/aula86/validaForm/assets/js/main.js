class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');

        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }


    checkFields(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
        
        for(let field of this.formulario.querySelectorAll('.validar')){
            const label = field.previousElementSibling.innerText;
            if(!field.value){
                this.errorMessage(field, `Campo "${label}" não pode estar vazio`);
                valid = false;
            }

            if(field.classList.contains('cpf')){
                if(this.validaCPF(field)) valid = false;
            }

            if(field.classList.contains('usuario')){
                if(this.validaUsuario(field)) valid = false;
            }
        }
        
        return valid;
    }


    validaCPF(field){
        const cpf = new ValidaCPF(field.value);
        if(!cpf.valida()) {
            this.errorMessage(field, 'CPF inválido');
            return true;
        }

        return true;
    }

    validaUsuario(field){
        const usuario = field.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.errorMessage(field, 'Usuário deve conter entre 3 e 12 caracteres');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.errorMessage(field, 'Usuário deve conter apenas letras e/ou números');
            valid = false;
        }
        return valid;
    }

    errorMessage(field, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }

    checkPassword(){
        let valid = true;
        const password = this.formulario.querySelector('.senha');
        const repeatPassword = this.formulario.querySelector('.repetir-senha');

        if (repeatPassword.value !== password.value){
            this.errorMessage(password, 'Campos senha e repetir senha precisam ser iguais');
            this.errorMessage(repeatPassword, 'Campos senha e repetir senha precisam ser iguais');
            valid = false;
        }

        if(password.value.length < 6 || password.value.length > 12){
            this.errorMessage(password, 'Senha deve conter entre 6 e 12 caracteres');
            valid = false;
        }
        
        return valid;
    }

    
    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.checkFields();
        const senhasValidas = this.checkPassword();

        if(camposValidos && senhasValidas){
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }
}

const valida = new ValidaFormulario();