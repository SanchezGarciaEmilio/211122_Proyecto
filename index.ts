//Importacion
import { menu } from "./src/util/menu";
import { crearClientePersonal,
        guardar,
        añadirComercial,
        borrarCliente,
        calcularSalario,
        calcularRenta,
        mediaGanancia,
        crearPrestamo } from "./src/util/funciones";

//Menu
const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1: //Nuevo profesor
                await guardar()
                break
            case 2: 
                await crearClientePersonal()
                break
            case 3: 
                await añadirComercial()
                break
            case 4: 
                await borrarCliente()
                break
            case 5: 
                await calcularSalario()
                break
            case 6: 
                await calcularRenta()
                break
            case 7: 
                await mediaGanancia()
                break
            case 8:
                await crearPrestamo()
                break
            case 0:
                console.log('\nSaliendo...')
        }
    }while (n != 0)

}

main()
