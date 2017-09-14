class Apuesta {
	constructor() {
		this.fecha = new Date()
		this.monto = 0
		this.tipoApuesta = null
		this.valorApostado = null
		this.resultado = null
	}

	validarApuesta() {
        const now = new Date()
        now.setHours(0, 0, 0, 0)
        if (now.getTime() > this.fecha.getTime()) {
            throw "Debe ingresar una fecha actual o posterior al día de hoy"
        }
        if (this.monto < 0) {
            throw "El monto a apostar debe ser positivo"
        }
        if (this.tipoApuesta === null) {
            throw "Debe ingresar tipo de apuesta"
		}
		if (this.valorApostado === null) {
            throw "Debe ingresar valor a apostar"
        }
        this.tipoApuesta.validar(this)
    }

    apostar() {
		this.resultado = null
        this.validarApuesta()
		const numeroGanador = Math.floor(Math.random() * 37)
		const gano = this.tipoApuesta.esGanador(numeroGanador, this.valorApostado)
		let ganancia = 0
		if (gano) {
			ganancia = this.monto * this.tipoApuesta.ganancia
		}
		this.resultado = new Resultado(gano, numeroGanador, ganancia)
	}
}

class Pleno {

	constructor() {
		this.ganancia = 35
		this.descripcion = 'Pleno'
		this.valoresAApostar = Array.from(new Array(36), (value ,index) => index + 1)
	}

    validar(apuesta) {
        if (apuesta.monto < 10) {
            throw "Debe apostar más de 10 $"
        }
    }

	esGanador(numeroGanador, valorApostado) {
		return numeroGanador === valorApostado
	}
}

class Docena {

	constructor() {
		this.ganancia = 11
		this.descripcion = 'Docena'
		this.valoresAApostar = [ "Primera", "Segunda", "Tercera" ]
	}

	validar(apuesta) {
        if (apuesta.monto < 50) {
            throw "Debe apostar más de 50 $"
        }
    }

    esGanador(numeroGanador, valorApostado) {
		const docena = this.valoresAApostar.indexOf(valorApostado)
		const min = docena * 12 + 1
		const max = (docena + 1) * 12
		return numeroGanador >= min && numeroGanador <= max
	}
}
