class Resultado {

    constructor(gano, numeroGanador, montoAGanar) {
        this.gano = gano
        this.numeroGanador = numeroGanador
        this.montoAGanar = montoAGanar
    }

    valor() {
        if (this.gano) {
            return '¡¡ Ganaste $' + this.montoAGanar + " !!"
        } else {
            return '¡¡Perdiste!! Salió el ' + this.numeroGanador
        }
    }

}
