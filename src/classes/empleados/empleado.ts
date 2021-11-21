/*-------------------------Clase de empleados-------------------------*/

export abstract class Empleado {
    private _id: string; //DNI del empleado
    private _nombre: string;
    private _telefono: { movil: string, fijo: string | null };
    private _direccion: Array<direccion>;
    private _iban: string; //Tipo string ya que no es un valor con el que se operará
    private _sueldo: number; //Sueldo base
    private _fecha: Date; //Fecha de incorporacion

    constructor(id: string,
        nombre: string,
        telefono: { movil: string, fijo: string | null },
        direccion: Array<direccion>,
        iban: string,
        sueldo: number,
        fecha: Date) {
        this._id = id;
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._iban = iban;
        this._sueldo = sueldo;
        this._fecha = fecha;
    }

    /*---------------Get y set---------------*/

    get id() {
        return this._id
    }
    get nombre() {
        return this._nombre
    }
    get telefono() {
        return this._telefono
    }
    get direccion() {
        return this._direccion
    }
    get iban() {
        return this._iban
    }
    get sueldo() {
        return this._sueldo
    }
    get fecha() {
        return this._fecha
    }

    /*---------------Métodos---------------*/

    //Todo
    todo() {
        return `DNI: ${this._id}
                Nombre: ${this._nombre}
                Telefono/s: ${this._telefono}
                Direccion/es: ${this._direccion}
                IBAN: ${this._iban}
                Sueldo base: ${this._sueldo}
                Fecha de incorporacion: ${this._fecha}`
    }

    //Calculo del sueldo
    salario(): number {
        let salario: number
        let salarioBase: number = this._sueldo
        let fecha: Date = this._fecha
        let fecha1: Date = new Date('January 1, 2015')
        let fecha2: Date = new Date('January 1, 2000')

        if (fecha >= fecha1) {
            salario = salarioBase * 1.02
        } else {
            if (fecha > fecha2) {
                salario = salarioBase * 1.03
            } else {
                salario = salarioBase * 1.05
            }
        }

        return Math.round(salario)
    }
}

export type direccion = {
    numero: string,
    calle: string,
}