import readline from 'readline'

let rl: any

function leeLinea(prompt: string) {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise<string>( (resuelta: any, rechazada: any) => {
        rl.question(`${prompt}: `, (cadenaEntrada: string) => {
                resuelta (cadenaEntrada)
            }
        )
    })
}

export async function input(prompt: string){
    let valor: string
    valor = await leeLinea(prompt)
    rl.close()
    return valor
}