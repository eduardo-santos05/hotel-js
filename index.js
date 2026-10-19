import PromptSync from "prompt-sync";

import hospedes from './hospedes.js'
import adicionarHospede from "./adicionarHospede.js";
import listarHospedes from "./listarHospedes.js";

const prompt = PromptSync();

function exibirMenu() {
    console.log('\n==== Hotel LionsInn ====')
    console.log('1 - Check-in (cadastrar hospede)')
    console.log('2 - Listar hóspedes')
    console.log('3 - Atualizar hóspede')
    console.log('4 - Check-out (remover hóspede)')
    console.log('5 - Calcular conta')
    console.log('0 - Sair')
}

let opcao

do {
    exibirMenu()
    opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
        case '1': {
            let quarto = Number(prompt('Quarto: '))
            let nome = prompt('Nome: ').trim()
            let diarias = Number(prompt('Diárias: '))
            let adicionarServico = prompt('Adicionar serviço? (sim/nao): ').trim().toLowerCase()
            let servicos = []
            if (adicionarServico === 'sim') {
                let servico = prompt('Serviço: ')
                if (servico !== '') {
                    servicos.push(servico)
                }
                while (adicionarServico === 'sim') {
                    adicionarServico = prompt('Outro serviço? (sim/nao): ').trim().toLowerCase()
                    if (adicionarServico === 'sim') {
                        servico = prompt('Serviço: ')
                        if (servico !== '') {
                            servicos.push(servico)
                        }
                    }
                }
            }

            if (adicionarHospede(hospedes, { quarto, nome, diarias, servicos})) {
                console.log('Check-in realizado com sucesso!')
            }
            
            break
        }
        case '2': {
            listarHospedes(hospedes)
            break
        }
        case '0': {
            console.log('Até logo!')
            break
        }
        default: {
            console.log('Opção inválida!')
            break
        }
    }
} while (opcao !== '0')
