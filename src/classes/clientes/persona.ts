/*-------------------------Clase de personas-------------------------*/
import { Cliente } from "./cliente";

export class Persona extends Cliente {
    private _comercial: string; //comercial asignado a él

    constructor(id: string,
        nombre: string,
        telefono: string,
        direccion: {numero: string, calle: string},
        capital: number,
        ingresos: number,
        comercial: string) {
        super(id, nombre, telefono, direccion, capital, ingresos)
        this._comercial = comercial
    }

    /*---------------Get y set---------------*/

    get comercial() {
       return this._comercial
    }


    /*---------------Métodos---------------*/

    //Todo
    todo() {
        return `${super.todo()}\n
                Comercial: ${this._comercial}`
    }

    //Calculo de la renta
    renta(): number {
        let ganancias: number = super.renta()
        let ingresos: number = super.ingresos

        //Cobramos un pequeño impuesto aquellos que ganen mas de 20.000€ al año
        if (ingresos > 20000) {
            ganancias = ganancias - (ganancias * 0.01)
        }

        return ganancias
        
    }
}
