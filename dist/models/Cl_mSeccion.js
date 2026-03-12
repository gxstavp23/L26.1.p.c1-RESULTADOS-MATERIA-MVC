export default class Cl_mSeccion {
    cntAprobados;
    cntReprobados;
    cntEstudiantes;
    acNotas;
    auxMayorNota;
    auxNombreMayor;
    constructor() {
        this.cntAprobados = 0;
        this.cntReprobados = 0;
        this.cntEstudiantes = 0;
        this.acNotas = 0;
        this.auxMayorNota = 0;
        this.auxNombreMayor = "";
    }
    procesarEstudiante(e) {
        this.cntEstudiantes++;
        this.acNotas += e.notaFinal;
        // Se aprueba con 48 Ptos
        if (e.notaFinal >= 48) {
            this.cntAprobados++;
        }
        else {
            this.cntReprobados++;
        }
        if (e.notaFinal > this.auxMayorNota) {
            this.auxMayorNota = e.notaFinal;
            this.auxNombreMayor = e.nombre;
        }
    }
    getCantidadAprobados() {
        return this.cntAprobados;
    }
    getCantidadReprobados() {
        return this.cntReprobados;
    }
    calcNotaPromedio() {
        if (this.cntEstudiantes === 0)
            return 0;
        return this.acNotas / this.cntEstudiantes;
    }
    getEstudianteMayorNota() {
        if (this.cntEstudiantes === 0)
            return "N/A";
        return `${this.auxNombreMayor} (con ${this.auxMayorNota} Ptos)`;
    }
}
//# sourceMappingURL=Cl_mSeccion.js.map