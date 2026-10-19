export default function adicionarHospede(hospedes, novoHospede) {
    for (let i = 0; i < hospedes.length; i++) {
        if (hospedes[i].quarto === novoHospede.quarto) {
            console.log(`Erro: O quarto ${hospedes[i].quarto} já está ocupado!`)
            return false
        }
    }

    if (hospedes.length > 0) {
        novoHospede.id = hospedes[hospedes.length-1].id + 1
    } else {
        novoHospede.id = 1
    }
}