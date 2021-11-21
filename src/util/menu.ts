import { input } from './input'

export const menu = async () => {
    let n: number
    console.log('\n')
    //hace un guardado general de todos los documentos (empleados y clientes) de la memoria a MongoDB
    console.log('1.- Guardar todo') 

    //crear nuevo cliente
    console.log('2.- Crear cliente')

    //actualiza el comercial asignado al cliente que elijamos
    console.log('3.- Añadir comercial')

    //elimina un cliente
    console.log('4.- Borrar cliente')

    //calcular salario empleados
    console.log('5.- Calcular salario')

    //calcula la renta del cliente en funcion de sus ingresos y capital
    console.log('6.- Calcular renta cliente')

    //mostrar la media de ganancias por comercial
    console.log('7.- Calcular media ganancia')

    //mostrar la media de ganancias por comercial
    console.log('8.- Prestamos')

    //sale del programa
    console.log('0.- Salir')
    n = parseInt( await input('Option') )
    return n
}