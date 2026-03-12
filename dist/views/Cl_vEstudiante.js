export default class Cl_vEstudiante {
    inCedula;
    inNombre;
    inNotaFinal;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("estudiante");
        this.inCedula = document.getElementById("estudiante_inCedula");
        this.inNombre = document.getElementById("estudiante_inNombre");
        this.inNotaFinal = document.getElementById("estudiante_inNotaFinal");
        this.btCancelar = document.getElementById("estudiante_btCancelar");
        this.btAceptar = document.getElementById("estudiante_btAceptar");
    }
    get cedula() {
        return this.inCedula.value;
    }
    get nombre() {
        return this.inNombre.value;
    }
    get notaFinal() {
        return +this.inNotaFinal.value;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vEstudiante.js.map