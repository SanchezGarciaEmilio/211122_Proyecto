/*-------------------------Clase de clientes-------------------------*/

export abstract class Cliente {
    private _id: string; //DNI del cliente o CIF de la empresa
    private _nombre: string; //del cliente o la empresa
    private _telefono: string; 
    protected _direccion: {numero: string, calle: string};
    private _capital: number;
    private _ingresos: number; //ingresos anuales

    constructor(id: string,
        nombre: string,
        telefono: string,
        direccion: {numero: string, calle: string},
        capital: number,
        ingresos: number) {
        this._id = id,
        this._nombre = nombre,
        this._telefono = telefono,
        this._direccion = direccion,
        this._capital = capital,
        this._ingresos = ingresos
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
    get capital() {
        return this._capital
    }
    get ingresos() {
        return this._ingresos
    }


    /*---------------Métodos---------------*/

    //Todo
    todo() {
        return `DNI: ${this._id}\n
                Nombre: ${this._nombre}\n
                Telefono: ${this._telefono}\n
                Direccion: ${this._direccion}\n
                Capital: ${this._capital}\n
                Ingresos: ${this._ingresos}\n`
    }

    //Calculo de la renta
    renta(): number {
        let capital = this._capital
        let ganancias: number

        //Dependiendo del capital invertiremos más o menos dinero
        if (capital < 100000) {
            ganancias = capital - (capital * 0.97)
        } else if ( capital < 500000) {
            ganancias = capital - (capital * 0.98)
        } else {
            ganancias = capital - (capital * 0.99)
        }
        
        return ganancias
    }
}
