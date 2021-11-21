/*-------------------------Clase de clientes-------------------------*/

import { Cliente } from "./cliente";

export class Empresa extends Cliente {
    private _plan: string; //plan financiero (1, 2 ó 3)

    constructor(id: string,
        nombre: string,
        telefono: string,
        direccion: {numero: string, calle: string},
        capital: number,
        ingresos: number,
        plan: string) {
        super(id, nombre, telefono, direccion, capital, ingresos)
        this._plan = plan
    }

    /*---------------Get y set---------------*/

    get plan() {
       return this._plan
    }

    /*---------------Métodos---------------*/

    //Todo
    todo() {
        return `${super.todo()}\n
                Plan: ${this._plan}`
    }

    //Calculo de la renta
    renta(): number {
        let ganacias: number = super.renta()
        let plan: string = this._plan

        if (plan == "1") {
            ganacias = ganacias + ( ganacias * 0.01 )
        } else if (plan == "2") {
            ganacias = ganacias + (( ganacias * 0.05 ) / 2 )
        } else if (plan == "3") {
            ganacias = ganacias - 100000
        }

        return ganacias
    }
}
