export default function listarHospedes(hospedes) {
    if (hospedes.length === 0) {
        console.log('Nenhum hóspede no hotel')
        return
    }

    hospedes.forEach((hospede) => {
        console.log(`\nID: ${hospede.id} | Quarto: ${hospede.quarto}`)
        console.log(`Hóspede: ${hospede.nome}`)
        console.log(`Diárias: ${hospede.diarias} (hospedagem: R$ ${(hospede.diarias * 200).toFixed(2)})`)
        console.log(`Serviços: ${hospede.servicos.join(" | ")}`)
    })
}