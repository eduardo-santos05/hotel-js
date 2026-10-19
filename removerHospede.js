export default function removerHospede(hospedes, quarto) {
    const indice = hospedes.findIndex((hospede) => hospede.quarto === quarto)

    if (indice === -1) {
        console.log(`Erro: O quarto ${quarto} está vazio!`)
        return false
    }

    let hospede = hospedes[indice].nome

    hospedes.splice(indice, 1)

    console.log(`Check-out de ${hospede} realizado.`)

    return true
}