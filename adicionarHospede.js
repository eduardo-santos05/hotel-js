export default function adicionarHospede(hospedes, novoHospede) {
    if (!Number.isInteger(novoHospede.quarto) || novoHospede.quarto <= 0) {
        console.log('Erro: Informe um número de quarto válido!')
        return false
    }

    if (!novoHospede.nome || novoHospede.nome.trim() === '') {
        console.log('Erro: O nome do hóspede é obrigatório!')
        return false
    }

    if (!Number.isInteger(novoHospede.diarias) || novoHospede.diarias <= 0) {
        console.log('Erro: Informe uma quantidade de diárias válida!')
        return false
    }

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

    hospedes.push(novoHospede)

    return true
}