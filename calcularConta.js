export default function calcularConta(hospedes, precos, quarto) {
    const indice = hospedes.findIndex((hospede) => hospede.quarto === quarto)

    if (indice === -1) {
        console.log(`Erro: O quarto ${quarto} está vazio.`)
        return false
    }

    const hospede = hospedes[indice]
    let total = hospede.diarias * 200

    console.log(`--- Conta do quarto ${quarto}: ${hospedes[indice].nome} ---`)

    console.log(`Diárias: ${hospede.diarias} x R$ 200 = R$ ${(hospede.diarias * 200)}`)

    hospede.servicos.forEach(servico => {
        const indicePreco = precos.findIndex(preco => preco.servico.toLowerCase() === servico.trim().toLowerCase())

        if (indicePreco !== -1) {
            let subtotal = hospede.diarias * precos[indicePreco].preco

            console.log(`${servico}: ${hospede.diarias} x R$ ${precos[indicePreco].preco} = R$ ${subtotal}`)

            total += subtotal
        } else {
            console.log(`${servico}: sem preço cadastrado`)
        }
    })

    console.log(`Total: R$ ${total}`)
}