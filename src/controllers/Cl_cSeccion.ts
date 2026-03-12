import Cl_mSeccion from "../models/Cl_mSeccion.js";
import Cl_vSeccion from "../views/Cl_vSeccion.js";
import Cl_cEstudiante from "./Cl_cEstudiante.js";

export default class Cl_cSeccion {
    private mSeccion: Cl_mSeccion = new Cl_mSeccion();
    private vSeccion: Cl_vSeccion = new Cl_vSeccion();

    constructor() {
        this.vSeccion.btNuevoEstudiante.onclick = () => this.procesar1Estudiante();
    }

    procesar1Estudiante() {
        new Cl_cEstudiante({
            callback: (estudiante) => {
                if (estudiante !== null) {
                    this.mSeccion.procesarEstudiante(estudiante);
                    this.vSeccion.reportar({
                        aprobados: this.mSeccion.getCantidadAprobados(),
                        reprobados: this.mSeccion.getCantidadReprobados(),
                        promedio: this.mSeccion.calcNotaPromedio(),
                        mayorNota: this.mSeccion.getEstudianteMayorNota(),
                    });
                }
            },
        });
    }
}