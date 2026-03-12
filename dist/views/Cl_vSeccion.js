export default class Cl_vSeccion {
    lblAprobados;
    lblReprobados;
    lblPromedio;
    btNuevoEstudiante;
    vista;
    lblMayorNota;
    constructor() {
        this.vista = document.getElementById("main_body");
        this.btNuevoEstudiante = document.getElementById("main_btNuevoEstudiante");
        this.lblAprobados = document.getElementById("main_lblAprobados");
        this.lblReprobados = document.getElementById("main_lblReprobados");
        this.lblPromedio = document.getElementById("main_lblPromedio");
        this.lblMayorNota = document.getElementById("main_lblMayorNota");
    }
    reportar({ aprobados, reprobados, promedio, mayorNota, }) {
        this.lblAprobados.innerHTML = `${aprobados}`;
        this.lblReprobados.innerHTML = `${reprobados}`;
        this.lblPromedio.innerHTML = `${promedio.toFixed(2)}`;
        this.lblMayorNota.innerHTML = mayorNota;
    }
}
//# sourceMappingURL=Cl_vSeccion.js.map