class vehiculo {

    prender() {
        console.log('encendido');
    }
    apagar() {
        console.log('apagado');
    }
}

class avion extends vehiculo {
    despegar(){
        console.log('despegando');
    }
    aterrizar(){
        console.log('aterrizar');
    }
}

class nave extends avion{
    despegar(){
        console.log('Motores encendidos');
    }
    aterrizar(){
        console.log('Capsula desplegada');
    }
}

var boeing = new avion;
var apolo = new nave;

apolo.aterrizar()


