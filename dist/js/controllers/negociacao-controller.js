var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NegociacoesService } from './../services/negociacoes-service.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from "../views/negociacoes-views.js";
import { MensagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { inspect } from "../decorators/inspect.js";
import { injectDOM } from "../decorators/injectDOM.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.mensagemSucesso = 'Negociação adicionada com sucesso';
        this.mensagemFalha = 'Não é possivel adicionar negociações aos finais de semana';
        this.negociacoesServico = new NegociacoesService;
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (this.isDiaUtil(negociacao.data)) {
            this.negociacoes.adiciona(negociacao);
            this.atualizaView();
            this.limpaFormulario();
        }
        else {
            this.mensagemView.update(this.mensagemFalha);
            this.limpaFormulario();
        }
    }
    isDiaUtil(data) {
        return data.getDay() !== DiasDaSemana.DOMINGO && data.getDay() !== DiasDaSemana.SABADO;
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(this.mensagemSucesso);
        this.limpaFormulario();
    }
    importaNegociacoesDoDia() {
        this.negociacoesServico.obterNegociacoesDoDia()
            .then((negociacoesInportadas) => this.negociacoesView.update(negociacoesInportadas));
    }
}
__decorate([
    injectDOM('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    injectDOM('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    injectDOM('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    inspect,
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);
