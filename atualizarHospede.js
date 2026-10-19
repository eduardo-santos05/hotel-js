export default function atualizarHospede(hospedes, id, novosDados) {
    const indice = hospedes.findIndex((hospede) => hospede.id === id)
    
    if (indice === -1) {
        console.log('Erro: Hóspede não encontrado!')
        return false
    }

}