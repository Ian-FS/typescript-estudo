import { NegociacoesService } from './../services/negociacoes-service.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from "../views/negociacoes-views.js";
import { MensagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { inspect } from "../decorators/inspect.js";
import { injectDOM } from "../decorators/injectDOM.js";
import { imprimir } from '../utils/imprimir.js';

export class NegociacaoController{

    @injectDOM('#data')
    private inputData:HTMLInputElement;
    @injectDOM('#quantidade')
    private inputQuantidade:HTMLInputElement;
    @injectDOM('#valor')
    private inputValor:HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView');
    private mensagemSucesso = 'Negociação adicionada com sucesso'
    private mensagemFalhaFinalDeSemana = 'Não é possivel adicionar negociações aos finais de semana'
    private mensagemFalhaJaFoiAdicionado = 'Negociacão já adicionada'
    private negociacoesServico = new NegociacoesService

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect
    @logarTempoDeExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe (
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if(this.isDiaUtil(negociacao.data)) {
            if(this.negociacoes.jaFoiAdicionado(negociacao)) {
                this.mensagemView.update(this.mensagemFalhaJaFoiAdicionado);
                this.limpaFormulario();
            } else {
                this.negociacoes.adiciona(negociacao);
                imprimir(negociacao)
                this.atualizaView();
                this.limpaFormulario();
            }
            
        } else {
            this.mensagemView.update(this.mensagemFalhaFinalDeSemana);
            this.limpaFormulario();
        }
        
    }

    private isDiaUtil(data: Date): boolean {
        return data.getDay() !== DiasDaSemana.DOMINGO && data.getDay() 
        !== DiasDaSemana.SABADO
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

    public importaNegociacoesDoDia(): void {
        this.negociacoesServico.obterNegociacoesDoDia()
        .then((negociacoesInportadas) => {
            negociacoesInportadas.forEach(
                (negociacaoImportada) => {
                    !this.negociacoes.jaFoiAdicionado(negociacaoImportada) &&
                    this.negociacoes.adiciona(negociacaoImportada)
                } 
            );
            this.negociacoesView.update(this.negociacoes);
        })   
    }
}