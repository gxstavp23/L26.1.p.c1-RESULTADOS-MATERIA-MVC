import Cl_mEstudiante from "../models/Cl_mEstudiante.js";
import Cl_vEstudiante from "../views/Cl_vEstudiante.js";

export default class Cl_cEstudiante {
    private vista = new Cl_vEstudiante();
    callback: (estudiante: Cl_mEstudiante | null) => void;

    constructor({ callback }: { callback: (estudiante: Cl_mEstudiante | null) => void }) {
        this.callback = callback;
        this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
        this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
        
        
        this.vista.inCedula.value = "";
        this.vista.inNotaFinal.value = "";
        this.vista.mostrar();
    }

    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }

    btAceptarOnClick() {
        
        if (!this.vista.cedula || !this.vista.nombre || isNaN(this.vista.notaFinal)) {
            alert("Por favor, ingrese datos válidos.");
            return;
        }

        this.callback(
            new Cl_mEstudiante({ 
                cedula: this.vista.cedula, 
                nombre: this.vista.nombre,
                notaFinal: this.vista.notaFinal 
            })
        );
        this.vista.ocultar();
    }
}