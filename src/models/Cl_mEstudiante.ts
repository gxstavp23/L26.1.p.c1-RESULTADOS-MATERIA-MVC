export default class Cl_mEstudiante {
    private _cedula: string = "";
    private _nombre: string = "";
    private _notaFinal: number = 0;

    constructor({ cedula, nombre, notaFinal }: { cedula: string; nombre: string; notaFinal: number }) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.notaFinal = notaFinal;
    }

    set cedula(cedula: string) {
        this._cedula = cedula;
    }
    get cedula(): string {
        return this._cedula;
    }
    set nombre(nombre: string) {
        this._nombre = nombre;
    }
    get nombre(): string {
        return this._nombre;
    }

    set notaFinal(notaFinal: number) {
        this._notaFinal = +notaFinal;
    }
    get notaFinal(): number {
        return this._notaFinal;
    }
}
