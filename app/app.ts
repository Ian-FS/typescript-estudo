import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-views.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form')

form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
    controller.atualizarTabela();
    controller.exibaTabela();
    
    
})

