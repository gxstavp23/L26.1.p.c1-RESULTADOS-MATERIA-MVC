export default class Cl_mEstudiante {
    _cedula;
    _nombre;
    _notaFinal;
    constructor({ cedula, nombre, notaFinal }) {
        this._cedula = cedula;
        this._nombre = nombre;
        this._notaFinal = notaFinal;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set notaFinal(notaFinal) {
        this._notaFinal = +notaFinal;
    }
    get notaFinal() {
        return this._notaFinal;
    }
}
//# sourceMappingURL=Cl_mEstudiante.js.map