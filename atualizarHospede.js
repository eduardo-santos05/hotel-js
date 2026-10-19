export default function atualizarHospede(hospedes, id, novosDados) {
    const indice = hospedes.findIndex((hospede) => hospede.id === id)

    if (indice === -1) {
        console.log('Erro: Hóspede não encontrado!')
        return false
    }

    hospedes[indice].nome = novosDados.nome || hospedes[indice].nome
    
    hospedes[indice].diarias = novosDados.diarias || hospedes[indice].diarias
    
    hospedes[indice].servicos = novosDados.servicos || hospedes[indice].servicos

    return true
}