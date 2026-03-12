export default class Cl_vSeccion {
    lblAprobados: HTMLElement;
    lblReprobados: HTMLElement;
    lblPromedio: HTMLElement;
    btNuevoEstudiante: HTMLButtonElement;
    vista: HTMLElement | null;
    lblMayorNota: HTMLElement;

    constructor() {
        this.vista = document.getElementById("main_body");
        this.btNuevoEstudiante = document.getElementById("main_btNuevoEstudiante") as HTMLButtonElement;
        this.lblAprobados = document.getElementById("main_lblAprobados") as HTMLElement;
        this.lblReprobados = document.getElementById("main_lblReprobados") as HTMLElement;
        this.lblPromedio = document.getElementById("main_lblPromedio") as HTMLElement;
        this.lblMayorNota = document.getElementById("main_lblMayorNota") as HTMLElement;
    }

    reportar({
        aprobados,
        reprobados,
        promedio,
        mayorNota,
    }: {
        aprobados: number;
        reprobados: number;
        promedio: number;
        mayorNota: string;
    }): void {
        this.lblAprobados.innerHTML = `${aprobados}`;
        this.lblReprobados.innerHTML = `${reprobados}`;
        this.lblPromedio.innerHTML = `${promedio.toFixed(2)}`;
        this.lblMayorNota.innerHTML = mayorNota;
    }
}