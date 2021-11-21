/*-------------------------Sublase de comerciales-------------------------*/

//Importamos las clases necesarias
import { Empleado, direccion } from "./empleado";

export class Comercial extends Empleado {
    private _horas: number;
    constructor(id: string,
        nombre: string,
        telefono: { movil: string, fijo: string | null },
        direccion: Array<direccion>,
        iban: string,
        sueldo: number,
        fecha: Date,
        horas: number) {
        super(id, nombre, telefono, direccion, iban, sueldo, fecha);
        this._horas = horas;
    }

    /*---------------Get y set---------------*/

    get horas() {
        return this._horas
    }


    /*---------------Métodos---------------*/

    //Todo
    todo() {
        return `${super.todo()}
                Horas: ${this._horas}`
    }

    //Calculo del sueldo
    salario(): number {
        let salario: number = super.salario()
        let horas: number = this._horas
        let horasExtra: number

        //si trabaja menos de las horas estipuladas se hace una pequeña reducción de su salario
        if (horas < 160) { 
            salario = salario - (salario * 0.01)

        //se da un aumento por hora trabajada por encima de lo mínimo
        } else {
            horasExtra = 160 - horas
            salario = salario + (horasExtra * 12) 
        }

        return Math.round(salario)
    }
}