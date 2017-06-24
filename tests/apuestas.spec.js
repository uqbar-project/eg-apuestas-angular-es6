describe('ApuestaController', () => {
    let apuestaController
    let apuestaValida
    const apuestasForm = {}

    beforeEach(angular.mock.module('ui.bootstrap'))
    beforeEach(angular.mock.module('apuestasApp'))

    // Inject the $controller service to create instances of the controller (UsersController) we want to test
    beforeEach(inject(($controller) => {
        apuestaController = $controller('apuestasCtrl', {})
        apuestaValida = new Apuesta()
        apuestaValida.fecha = new Date()
        apuestaValida.tipoApuesta = new Pleno()
        apuestaValida.valorApostado = 5
        apuestaValida.monto = 150
    }))

    // Verificamos que existe el controller
    it('should be defined', () => {
        expect(apuestaController).toBeDefined()
    })

    it('si no ingresa nada no debe permitir apostar', () => {
        apuestaController.apostar(apuestasForm)
        expect('Debe ingresar tipo de apuesta').toBe(apuestaController.errorMessage)
    })

    it('si no ingresa nada el formulario queda invalido', () => {
        apuestaController.apostar(apuestasForm)
        expect(true).toBe(apuestasForm.$invalid)
    })

    it('si no ingresa valores no debe permitir apostar', () => {
        apuestaController.apostar(apuestasForm)
        expect('Debe ingresar tipo de apuesta').toBe(apuestaController.errorMessage)
    })

    it('no se puede apostar una fecha anterior a la de hoy', () => {
        const fechaVieja = new Date(2011, 4, 4)
        apuestaController.apuesta.fecha = fechaVieja
        apuestaController.apostar({})
        expect('Debe ingresar una fecha actual o posterior al día de hoy').toBe(apuestaController.errorMessage)
    })
    
    it('una apuesta valida no da error', () => {
        apuestaController.apuesta = apuestaValida
        apuestaController.apostar({})
        expect('').toBe(apuestaController.errorMessage)
    })

    it('una apuesta valida produce algun resultado', () => {
        apuestaController.apuesta = apuestaValida
        apuestaController.apostar({})
        expect('').not.toBe(apuestaController.resultado)
    })

})
