class ApuestaController {

    constructor() {
        this.apuesta = new Apuesta()
        this.tiposApuesta = [ new Pleno(), new Docena() ]
        this.fechaMinimaApuesta = new Date()
        this.calendarioAbierto = false
		this.errorMessage = ""
    }

	verCalendario($event) {
		$event.preventDefault()
		$event.stopPropagation()
		this.calendarioAbierto = true
	}

	apostar(apuestasForm) {
		try {
			this.errorMessage = ""
			this.apuesta.apostar()
		} catch (exception) {
			apuestasForm.$invalid = true
			this.errorMessage = exception
		}
	}        

}