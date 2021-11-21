/*-------------------------Sublase de directivos-------------------------*/

//Importamos las clases necesarias
import { Empleado, direccion } from "./empleado";

export class Directivo extends Empleado {
    private _nivel: string; //Niveles: A1, A2, B1, B2, C1, C2
    constructor(id: string,
        nombre: string,
        telefono: { movil: string, fijo: string | null },
        direccion: Array<direccion>,
        iban: string,
        sueldo: number,
        fecha: Date,
        nivel: string) {
        super(id, nombre, telefono, direccion, iban, sueldo, fecha);
        this._nivel = nivel;
    }

    /*---------------Get y set---------------*/

    get nivel() {
        return this._nivel
    }

    /*---------------Métodos---------------*/

    //Todo
    todo() {
        return `${super.todo()}
                Nivel: ${this._nivel}`
    }

    //Calculo del sueldo
    salario(): number {
        let salario: number = super.salario()
        let nivel: string = this._nivel

        if (nivel == "A1") {
            salario = salario + 110
        } else if ( nivel == "A2") {
            salario = salario + 130
        } else if ( nivel == "B1") {
            salario = salario + 220
        } else if ( nivel == "B2") {
            salario = salario + 240
        } else if ( nivel == "C1") {
            salario = salario + 350
        } else if ( nivel == "C2") {
            salario = salario + 500
        }

        return Math.round(salario)
    }
}