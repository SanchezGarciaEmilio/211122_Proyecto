//Importacion
import { db } from "../database/database";
import { input } from "../util/input";
import { Empleado } from "../classes/empleados/empleado";
import { Directivo } from "../classes/empleados/directivo";
import { Limpiador } from "../classes/empleados/limpiador";
import { Comercial } from "../classes/empleados/comercial";
import { Emp, tComercial, tComercial2, tDirectivo, tEmpleado, tLimpiador, tTrabajadores } from "../model/empleado";
import { Cliente } from "../classes/clientes/cliente";
import { Cli, tCliente, tCliente2, tEmpresa, tPersona } from "../model/cliente";
import { Persona } from "../classes/clientes/persona";
import { Empresa } from "../classes/clientes/empresa";
import { Reg, tRegistro } from "../model/registro";

let empleados: Array<Empleado> = new Array<Empleado>()
let clientes: Array<Cliente> = new Array<Cliente>()


/*------------- Guardar en la base de datos -------------*/
export let guardar = async () => {
    //Declaramos varios empleados y clientes de ejemplo
    empleados[0] = new Directivo("788565624X",
                                "Jecho Crafter",
                                {   movil: "123456789",
                                    fijo: null },
                                [
                                    {
                                    numero: "0",
                                    calle: "Barby Lane" 
                                    },
                                    {   
                                    numero: "9998",
                                    calle: "Forest Run Center" 
                                    }
                                ],
                                "47617602480838141002",
                                7022,
                                new Date('December 17, 1995'),
                                "A2")
    empleados[1] = new Directivo("327377335W", "Clarissa Lambis", { movil: "376518636", fijo: null }, [{ numero: "0", calle: "Barby Lane" }], "19955479684516287119", 9411, new Date('November 12, 1998'), "B1")
    empleados[2] = new Limpiador("777743558U", "Eleni Lambertson", { movil: "985672795", fijo: null }, [{ numero: "0", calle: "Barby Lane" }], "54718735681807285497", 739, new Date('January 5, 2005'), "Powlowski Group")
    empleados[3] = new Limpiador("209477460H", "Daryl Dorrian", { movil: "16953086", fijo: null }, [{ numero: "0", calle: "Barby Lane" }], "85611010621008992262", 673, new Date('July 29, 2009'), "Mitchell and Sons")
    empleados[4] = new Comercial("931445118N", "Cara Raiker", { movil: "581509813", fijo: null }, [{ numero: "0", calle: "Barby Lane" }], "78994213442332801586", 1567, new Date('August 30, 2017'), 165)
    empleados[5] = new Comercial("897651290I", "Flo Ties", { movil: "458136098", fijo: null }, [{ numero: "0", calle: "Barby Lane" }], "90293120493726245776", 1800, new Date('September 1, 2011'), 140)

    clientes[0] = new Persona("245984700Q",
                            "Temple Smalcombe",
                            "931445118",
                            {   numero: "5",
                                calle: "Chive Point" },
                            12908,
                            16432,
                            "897651290I")
    clientes[1] = new Persona("743798235T", "Gilda Ruddy", "987432654", { numero: "41086", calle: "Morrow Avenue" }, 110965, 49873, "931445118N")
    clientes[2] = new Empresa("Y-967070194", "Major Pharmaceuticals", "768265513O", { numero: "75709", calle: "Clarendon Way" }, 789149, 234512, "2")
    clientes[3] = new Empresa("G-462700345", "Railroads", "931445118", { numero: "4", calle: "Thierer Place" }, 419045, 56789, "3")


    //Esquemas de los empleados
    let sSchema: any

    let sSchemaEmp: tEmpleado =
    {
        _id: null,
        _tipoObjeto: null,
        _nombre: null,
        _telefono: null,
        _direccion: null,
        _iban: null,
        _sueldo: null,
        _fecha: null,
    }

    let sSchemaDir: tDirectivo =
    {
        _id: null,
        _tipoObjeto: null,
        _nombre: null,
        _telefono: null,
        _direccion: null,
        _iban: null,
        _sueldo: null,
        _fecha: null,
        _nivel: null,
    }
    let sSchemaLim: tLimpiador =
    {
        _id: null,
        _tipoObjeto: null,
        _nombre: null,
        _telefono: null,
        _direccion: null,
        _iban: null,
        _sueldo: null,
        _fecha: null,
        _empresa: null,
    }
    let sSchemaCom: tComercial =
    {
        _id: null,
        _tipoObjeto: null,
        _nombre: null,
        _telefono: null,
        _direccion: null,
        _iban: null,
        _sueldo: null,
        _fecha: null,
        _horas: null,
        _minimo: null,
    }

    await db.conectarBD()

    for (let a of empleados) {
        sSchemaEmp._id = sSchemaDir._id = sSchemaLim._id = sSchemaCom._id = a.id
        sSchemaEmp._nombre = sSchemaDir._nombre = sSchemaLim._nombre = sSchemaCom._nombre = a.nombre
        sSchemaEmp._telefono = sSchemaDir._telefono = sSchemaLim._telefono = sSchemaCom._telefono = a.telefono
        sSchemaEmp._direccion = sSchemaDir._direccion = sSchemaLim._direccion = sSchemaCom._direccion = a.direccion
        sSchemaEmp._iban = sSchemaDir._iban = sSchemaLim._iban = sSchemaCom._iban = a.iban
        sSchemaEmp._sueldo = sSchemaDir._sueldo = sSchemaLim._sueldo = sSchemaCom._sueldo = a.sueldo
        sSchemaEmp._fecha = sSchemaDir._fecha = sSchemaLim._fecha = sSchemaCom._fecha = a.fecha

        //Separamos dependiendo del tipo de objeto
        if (a instanceof Directivo) {
            sSchemaDir._tipoObjeto = "Directivo"
            sSchemaDir._nivel = a.nivel
            sSchema = new Emp(sSchemaDir)

        } else if (a instanceof Limpiador) {
            sSchemaLim._tipoObjeto = "Limpiador"
            sSchemaLim._empresa = a.empresa
            sSchema = new Emp(sSchemaLim)

        } else if (a instanceof Comercial) {
            sSchemaCom._tipoObjeto = "Comercial"
            sSchemaCom._horas = a.horas
            if (a.horas >= 160) {
                sSchemaCom._minimo = true
            } else {
                sSchemaCom._minimo = false
            }
            sSchema = new Emp(sSchemaCom)

        }
        await sSchema.save()
    }

    //Esquemas de los clientes
    let sSchemaCli: tCliente =
    {
        _id: null,
        _tipoObjeto: null,
        _nombre: null,
        _telefono: null,
        _direccion: null,
        _capital: null,
        _ingresos: null,
        _plan: null,
        _comercial: null,
    }

    let sSchemaPer: tPersona = {
        _id: null,
        _tipoObjeto: null,
        _nombre: null,
        _telefono: null,
        _direccion: null,
        _capital: null,
        _ingresos: null,
        _comercial: null,
    }

    let sSchemaEmpr: tEmpresa = {
        _id: null,
        _tipoObjeto: null,
        _nombre: null,
        _telefono: null,
        _direccion: null,
        _capital: null,
        _ingresos: null,
        _plan: null,
    }

    for (let a of clientes) {
        sSchemaCli._id = sSchemaPer._id = sSchemaEmpr._id = a.id
        sSchemaCli._nombre = sSchemaPer._nombre = sSchemaEmpr._nombre = a.nombre
        sSchemaCli._telefono = sSchemaPer._telefono = sSchemaEmpr._telefono = a.telefono
        sSchemaCli._direccion = sSchemaPer._direccion = sSchemaEmpr._direccion = a.direccion
        sSchemaCli._capital = sSchemaPer._capital = sSchemaEmpr._capital = a.capital
        sSchemaCli._ingresos = sSchemaPer._ingresos = sSchemaEmpr._ingresos = a.ingresos

        //Separamos dependiendo del tipo de los objetos
        if (a instanceof Persona) {
            sSchemaPer._comercial = a.comercial
            sSchemaPer._tipoObjeto = "Personal"
            sSchema = new Cli(sSchemaPer)

        } else if (a instanceof Empresa) {
            sSchemaEmpr._plan = a.plan
            sSchemaEmpr._tipoObjeto = "Empresarial"
            sSchema = new Cli(sSchemaEmpr)

        }
        await sSchema.save()
            .then(() => console.log('\nGuardado Correctamente'))
            .catch((err: any) => console.log('\nError: ' + err))

    }
    await db.desconectarBD()
}


/*------------- Crear un cliente personal y lo sube a la base de datos -------------*/
export let crearClientePersonal = async () => {
    await db.conectarBD()

    //Pedimos todos los datos que el usuario va a introducir a la base de datos
    const id = await input('\nIntroduzca el DNI del cliente')
    const nombre = await input('Introduzca el nombre del cliente')
    const telefono = await input('Introduzca el numero de telefono del cliente')
    const numero = await input('Introduzca el numero de la calle del cliente')
    const calle = await input('Introduzca la calle del cliente')
    const capital = parseInt(await input('Introduzca el capital del cliente'))
    const ingresos = parseInt(await input('Introduzca los ingresos anuales del cliente'))

    let clientePersonal: Persona = new Persona(id, nombre, telefono, { numero: numero, calle: calle }, capital, ingresos, "")

    let scSchema: any
    let cSchema: tPersona =
    {
        _id: null,
        _tipoObjeto: null,
        _nombre: null,
        _telefono: null,
        _direccion: null,
        _capital: null,
        _ingresos: null,
        _comercial: null,
    }

    cSchema._id = clientePersonal.id
    cSchema._tipoObjeto = "Personal"
    cSchema._nombre = clientePersonal.nombre
    cSchema._telefono = clientePersonal.telefono
    cSchema._direccion = clientePersonal.direccion
    cSchema._capital = clientePersonal.capital
    cSchema._ingresos = clientePersonal.ingresos
    cSchema._comercial = clientePersonal.comercial

    scSchema = new Cli(cSchema)
    await scSchema.save()
        .then((doc: any) => console.log('\nSalvado Correctamente: ' + doc))
        .catch((err: any) => console.log('\nError: ' + err))

    await db.desconectarBD()
}


/*------------- Actualizar clientes para añadirles su empleado -------------*/
export let añadirComercial = async () => {
    const dniCli = await input('\nInserte el DNI del cliente que va a actualizar')
    let dCliente: tCliente2
    let tmpPersona: Persona = new Persona("", "", "", { numero: "", calle: "" }, 0, 0, "")
    let tmpEmpresa: Empresa = new Empresa("", "", "", { numero: "", calle: "" }, 0, 0, "")

    await db.conectarBD()

    //Buscamos el cliente que hemos solicitado anteriormente y lo guardamos en memoria
    let query1: any = await Cli.findOne({ _id: dniCli })
    dCliente = query1

    if (dCliente._tipoObjeto == "Empresarial") {
        tmpEmpresa = new Empresa(dCliente._id,
                                dCliente._nombre,
                                dCliente._telefono,
                                dCliente._direccion,
                                dCliente._capital,
                                dCliente._ingresos,
                                dCliente._plan)
    } else if (dCliente._tipoObjeto == "Personal") {
        tmpPersona = new Persona(dCliente._id,
                                dCliente._nombre,
                                dCliente._telefono,
                                dCliente._direccion,
                                dCliente._capital,
                                dCliente._ingresos,
                                dCliente._comercial)
    }

    //Mostramos los comerciales disponibles
    console.log('\nEsto son los comerciales disponibles:')
    let query2: any = await Emp.find()
    for (let a of query2) {
        if (a._tipoObjeto == "Comercial")
            console.log(a._id, a._nombre)
    }

    //Elegimos uno de ellos
    const dniEmp = await input('Elija uno de los empleados para asignarlo')

    await Cli.findOneAndUpdate(
        { _id: dniCli },
        {
            _comercial: dniEmp,
        },
        {
            runValidators: true //Ejecutamos las validaciones del esquema
        }
    )
        .then(() => console.log('\nModificado Correctamente'))
        .catch((err: any) => console.log('\nError: ' + err))

    await db.desconectarBD()
}


/*------------- Borrar cliente -------------*/
export let borrarCliente = async () => {
    const dniCli = await input('\nInserte el DNI del cliente que va a borrar')

    await db.conectarBD()

    let query: any = await Cli.findOneAndDelete({ _id: dniCli })
        .then(() => console.log('\nEliminado Correctamente'))
        .catch((err: any) => console.log('\nError: ' + err))

    await db.desconectarBD()
}


/*------------- Mostrar los empleados -------------*/
export let calcularSalario = async () => {

    await db.conectarBD()

    let tmpEmpleado: Empleado
    let dEmpleado: tTrabajadores
    let query: any = await Emp.find({})

    console.log('\n')
    for (dEmpleado of query) {
        if (dEmpleado._tipoObjeto == "Directivo") {
            tmpEmpleado = new Directivo(dEmpleado._id,
                                        dEmpleado._nombre,
                                        dEmpleado._telefono,
                                        dEmpleado._direccion,
                                        dEmpleado._iban,
                                        dEmpleado._sueldo,
                                        dEmpleado._fecha,
                                        dEmpleado._nivel)
            console.log(`Nombre: ${tmpEmpleado.nombre}, Cargo: ${dEmpleado._tipoObjeto}, Salario: ${tmpEmpleado.salario()}`)

        } else if (dEmpleado._tipoObjeto == "Limpiador") {
            tmpEmpleado = new Limpiador(dEmpleado._id,
                                        dEmpleado._nombre,
                                        dEmpleado._telefono,
                                        dEmpleado._direccion,
                                        dEmpleado._iban,
                                        dEmpleado._sueldo,
                                        dEmpleado._fecha,
                                        dEmpleado._empresa)
            console.log(`Nombre: ${tmpEmpleado.nombre}, Cargo: ${dEmpleado._tipoObjeto}, Salario: ${tmpEmpleado.salario()}`)

        } else if (dEmpleado._tipoObjeto == "Comercial") {
            tmpEmpleado = new Comercial(dEmpleado._id,
                                        dEmpleado._nombre,
                                        dEmpleado._telefono,
                                        dEmpleado._direccion,
                                        dEmpleado._iban,
                                        dEmpleado._sueldo,
                                        dEmpleado._fecha,
                                        dEmpleado._horas)
            console.log(`Nombre: ${tmpEmpleado.nombre}, Cargo: ${dEmpleado._tipoObjeto}, Salario: ${tmpEmpleado.salario()}`)

        }
    }

    await db.desconectarBD()
}

/*
Nombre: Jecho Crafter, Cargo: Directivo, Salario: 7503
Nombre: Clarissa Lambis, Cargo: Directivo, Salario: 10102
Nombre: Eleni Lambertson, Cargo: Limpiador, Salario: 761
Nombre: Daryl Dorrian, Cargo: Limpiador, Salario: 693
Nombre: Cara Raiker, Cargo: Comercial, Salario: 1538
Nombre: Flo Ties, Cargo: Comercial, Salario: 1835
*/


/*------------- Calcula la renta por cliente en un tiempo -------------*/
export let calcularRenta = async () => {

    await db.conectarBD()

    let tmpCliente: Cliente
    let dCliente: tCliente2
    let query: any = await Cli.find({})
    const años = parseInt(await input('¿Durante cuantos años quiere calcularlo?'))

    console.log('\n')
    for (dCliente of query) {
        if (dCliente._tipoObjeto == "Personal") {
            tmpCliente = new Persona(dCliente._id,
                                    dCliente._nombre,
                                    dCliente._telefono,
                                    dCliente._direccion,
                                    dCliente._capital,
                                    dCliente._ingresos,
                                    dCliente._comercial)
            let ganancias = tmpCliente.renta() * años
            console.log(`Nombre: ${tmpCliente.nombre}, Tipo de cuenta: Personal, Ganancias: ${ganancias}`)

        } else if (dCliente._tipoObjeto == "Empresarial") {
            tmpCliente = new Empresa(dCliente._id,
                                    dCliente._nombre,
                                    dCliente._telefono,
                                    dCliente._direccion,
                                    dCliente._capital,
                                    dCliente._ingresos,
                                    dCliente._plan)
            let ganancias = tmpCliente.renta() * años
            console.log(`Nombre: ${tmpCliente.nombre}, Tipo de cuenta: Empresarial, Ganancias: ${ganancias}`)

        }
    }

    await db.desconectarBD()
}

/* 
¿Durante cuantos años quiere calcularlo?: 1

Nombre: Temple Smalcombe, Tipo de cuenta: Personal, Ganancias: 387.2399999999998
Nombre: Gilda Ruddy, Tipo de cuenta: Personal, Ganancias: 2197.1070000000027
Nombre: Major Pharmaceuticals, Tipo de cuenta: Empresarial, Ganancias: 8088.77724999999
Nombre: Railroads, Tipo de cuenta: Empresarial, Ganancias: -91619.09999999998
*/


/*------------- Calcula la ganancia por empleado-cliente -------------*/
export let mediaGanancia = async () => {

    await db.conectarBD()

    let tmpCliente: Persona
    let dCliente: tCliente2
    let tmpComercial: Comercial
    let dComercial: tComercial2
    let gastoEmpleado: number
    let gananciasCliente: number
    let total: number
    let query: any = await Cli.find({})
    let query2: any

    for (dCliente of query) {
        tmpCliente = new Persona(dCliente._id,
                                dCliente._nombre,
                                dCliente._telefono,
                                dCliente._direccion,
                                dCliente._capital,
                                dCliente._ingresos,
                                dCliente._comercial)

        //Buscamos el empleado que tenga asignado dicho cliente y lo creamos para usar el método salario
        query2 = await Emp.find({ _id: tmpCliente.comercial })
        for (dComercial of query2) {
            tmpComercial = new Comercial(dComercial._id,
                                        dComercial._nombre,
                                        dComercial._telefono,
                                        dComercial._direccion,
                                        dComercial._iban,
                                        dComercial._sueldo,
                                        dComercial._fecha,
                                        dComercial._horas)

            //Calculamos el total de dinero
            gastoEmpleado = tmpComercial.salario()
            gananciasCliente = tmpCliente.renta()
            total = gananciasCliente - gastoEmpleado

            if (total < 0) {
                console.log(`El comercial: ${tmpComercial.id} está perdiendo ${total} dinero con el cliente ${dCliente._id}.`)
            } else {
                console.log(`El comercial: ${tmpComercial.id} está ganando ${total} dinero con el cliente ${dCliente._id}.`)
            }
        }
    }

    await db.desconectarBD()
}

/*
El comercial: 897651290I está perdiendo -1447.7600000000002 dinero con el cliente 245984700Q.
El comercial: 931445118N está ganando 659.1070000000027 dinero con el cliente 743798235T.
*/


/*------------- Crea un prestamo a un cliente -------------*/
export let crearPrestamo = async () => {

    await db.conectarBD()

    const dniCli = await input('Introduzca su DNI para hacer un prestamo')
    const prestamo = parseInt(await input('Introduzca la cantidad que desea pedir'))
    let tmpCliente: Cliente
    let dCliente: tCliente2
    let interes: number
    let fecha: Date = new Date()
    let plazo: Date
    let query: any = await Cli.find({ _id: dniCli })

    let sSchema: any
    let sSchemaReg: tRegistro = {
        _idComercial: null,
        _idCliente: null,
        _capitalCliente: null,
        _prestamo: null,
        _interes: null,
        _plazo: null,
    }

    for (dCliente of query) {
        if (dCliente._tipoObjeto == "Personal") {
            tmpCliente = new Persona(dCliente._id,
                                    dCliente._nombre,
                                    dCliente._telefono,
                                    dCliente._direccion,
                                    dCliente._capital,
                                    dCliente._ingresos,
                                    dCliente._comercial)

            if (prestamo < 10000) {
                interes = 0.05
                fecha.setMonth(fecha.getMonth() + 6)
                plazo = fecha

            } else if (prestamo < 50000) {
                interes = 0.07
                fecha.setFullYear(fecha.getFullYear() + 2)
                plazo = fecha

            } else {
                interes = 0.09
                fecha.setFullYear(fecha.getFullYear() + 10)
                plazo = fecha
            }

            sSchemaReg._idComercial = dCliente._comercial
            sSchemaReg._idCliente = dCliente._id
            sSchemaReg._capitalCliente = dCliente._capital
            sSchemaReg._prestamo = prestamo
            sSchemaReg._interes = interes
            sSchemaReg._plazo = plazo

            sSchema = new Reg(sSchemaReg)
            await sSchema.save()
                .then((doc: any) => console.log('\nSalvado Correctamente: ' + doc))
                .catch((err: any) => console.log('\nError: ' + err))
        }
    }
    await db.desconectarBD()
}