export default function removerHospede(hospedes, quarto) {
    const indice = hospedes.findIndex((hospede) => hospede.quarto === quarto)

    if (indice === -1) {
        console.log(`Erro: O quarto ${hospedes[indice].quarto} está vazio!`)
        return false
    }
}