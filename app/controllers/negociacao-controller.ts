import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from "../views/negociacoes-views.js";
import { MensagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { inspect } from "../decorators/inspect.js";

export class NegociacaoController{

    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true)
    private mensagemView = new MensagemView('#mensagemView');
    private mensagemSucesso = 'Negociação adicionada com sucesso'
    private mensagemFalha = 'Não é possivel adicionar negociações aos finais de semana'

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView;
    }

    @inspect
    @logarTempoDeExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe (
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        console.log(negociacao.data)

        if(this.isDiaUtil(negociacao.data)) {
            this.negociacoes.adiciona(negociacao);
            this.atualizaView();
            this.limpaFormulario();
        } else {
            this.mensagemView.update(this.mensagemFalha);
            this.limpaFormulario();
        }
        
    }

    @inspect
    private isDiaUtil(data: Date): boolean {
        return data.getDay() !== DiasDaSemana.DOMINGO && data.getDay() !== DiasDaSemana.SABADO
    }

    private limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    @inspect
    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update(this.mensagemSucesso)
        this.limpaFormulario()
    }
}