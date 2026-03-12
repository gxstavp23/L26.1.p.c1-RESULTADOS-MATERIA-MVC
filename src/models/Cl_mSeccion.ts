import Cl_mEstudiante from "./Cl_mEstudiante.js";

export default class Cl_mSeccion {
    private cntAprobados: number;
    private cntReprobados: number;
    private cntEstudiantes: number;
    private acNotas: number;
    private auxMayorNota: number;
    private auxNombreMayor: string;
    
    

    constructor() {
        this.cntAprobados = 0;
        this.cntReprobados = 0;
        this.cntEstudiantes = 0;
        this.acNotas = 0;
        this.auxMayorNota = 0;
        this.auxNombreMayor = "";
    }

    procesarEstudiante(e: Cl_mEstudiante): void {
        this.cntEstudiantes++;
        this.acNotas += e.notaFinal;

        // Se aprueba con 48 Ptos
        if (e.notaFinal >= 48) {
            this.cntAprobados++;
        } else {
            this.cntReprobados++;
        }
        if (e.notaFinal > this.auxMayorNota) {
            this.auxMayorNota = e.notaFinal;
            this.auxNombreMayor = e.nombre; 
        }
       
    }

    getCantidadAprobados(): number {
        return this.cntAprobados;
    }

    getCantidadReprobados(): number {
        return this.cntReprobados;
    }

    calcNotaPromedio(): number {
        if (this.cntEstudiantes === 0) return 0;
        return this.acNotas / this.cntEstudiantes;
    }
   getEstudianteMayorNota(): string {
        if (this.cntEstudiantes === 0) return "N/A";
        return `${this.auxNombreMayor} (con ${this.auxMayorNota} Ptos)`; 
    }
    
}