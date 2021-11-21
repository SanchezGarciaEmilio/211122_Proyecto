/*-------------------------Sublase de limpiadores-------------------------*/

//Importamos las clases necesarias
import { Empleado, direccion } from "./empleado";

export class Limpiador extends Empleado {
    private _empresa: string; //Subcontrata de los limpiadores
    constructor(id: string,
        nombre: string,
        telefono: { movil: string, fijo: string | null },
        direccion: Array<direccion>,
        iban: string,
        sueldo: number,
        fecha: Date,
        empresa: string) {
        super(id, nombre, telefono, direccion, iban, sueldo, fecha);
        this._empresa = empresa;
    }

    /*---------------Get y set---------------*/

    get empresa() {
        return this._empresa
    }

    /*---------------Métodos---------------*/

    //Todo
    todo() {
        return `${super.todo()}
                Empresa: ${this._empresa}`
    }

    //Calculo del sueldo
    salario(): number {
        let salario: number = super.salario()
        let empresa: string = this._empresa

        if (empresa == "Powlowski Group") {

        } else if (empresa == "Mitchell and Sons") {

        }

        return Math.round(salario)
    }
}