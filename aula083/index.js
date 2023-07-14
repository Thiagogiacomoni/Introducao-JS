// métodos de instancia e estaticos

function teste() { // como seria o metodo estatico em função fora da classe
    console.log('teste');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }
    // metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    // metodo de instancia
    diminuirVolume() {
        this.volume -= 2;
    }
    // metodo estatico
    static soma(x, y) { // nao tem acesso aos outros metodos
        console.log(this);
    }
}

const controle1 = new ControleRemoto('LG');

ControleRemoto.soma(); // só consegue acessar o metodo estatico pela classe


