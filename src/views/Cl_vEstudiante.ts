export default class Cl_vEstudiante {
    inCedula: HTMLInputElement;
    inNombre: HTMLInputElement;
    inNotaFinal: HTMLInputElement;
    btCancelar: HTMLButtonElement;
    btAceptar: HTMLButtonElement;
    vista: HTMLElement;

    constructor() {
        this.vista = document.getElementById("estudiante") as HTMLElement;
        this.inCedula = document.getElementById("estudiante_inCedula") as HTMLInputElement;
        this.inNombre = document.getElementById("estudiante_inNombre") as HTMLInputElement; 
        this.inNotaFinal = document.getElementById("estudiante_inNotaFinal") as HTMLInputElement;
        this.btCancelar = document.getElementById("estudiante_btCancelar") as HTMLButtonElement;
        this.btAceptar = document.getElementById("estudiante_btAceptar") as HTMLButtonElement;
    }

    get cedula(): string {
        return this.inCedula.value;
    }
    get nombre(): string {
        return this.inNombre.value;
    }

    get notaFinal(): number {
        return +this.inNotaFinal.value;
    }

    mostrar(): void {
        if (this.vista === null) return;
        this.vista.hidden = false;
    }

    ocultar(): void {
        if (this.vista === null) return;
        this.vista.hidden = true;
    }
}