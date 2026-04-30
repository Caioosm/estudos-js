class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 1;
    }

    diminuirVolume() {
        this.volume -= 1;
    }

    static trocarPilha(){
        console.log('Pilha trocada');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
console.log(controle1.volume); // 1

ControleRemoto.trocarPilha(); // Pilha trocada  