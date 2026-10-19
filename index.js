import PromptSync from "prompt-sync";

import adicionarHospede from "./adicionarHospede.js";
import listarHospedes from "./listarHospedes.js";
import atualizarHospede from "./atualizarHospede.js";
import removerHospede from "./removerHospede.js";
import calcularConta from "./calcularConta.js";

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
