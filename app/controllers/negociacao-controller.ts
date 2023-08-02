import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from "../views/negociacoes-views.js";
import { MensagemView } from '../views/mensagem-view.js';

export class NegociacaoController{

    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView');
    private mensagemSucesso = 'Negociação adicionada com sucesso'
    private mensagemFalha = 'Não é possivel adicionar uma negociação aos finais de semana'

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView;
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao();
        if(negociacao.data.getDay() !== 0 && negociacao.data.getDay() !== 6) {
            this.negociacoes.adiciona(negociacao);
            this.atualizaView();
        } else {
            this.mensagemView.update(this.mensagemFalha)
        }
        
    }

    // verificaDiaUtil(data: Date): boolean {
    //     if(data.getDay() < 0 && data.getDay() > 6) {
    //         return false
    //     } else true
    // }

    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    private limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update(this.mensagemSucesso)
        this.limpaFormulario()
    }
}