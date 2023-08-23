import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from './../models/negociacoes.js';
export class NegociacoesService {
    constructor() {
        this.negociacoes = new Negociacoes;
    }
    obterNegociacoesDoDia() {
        return (fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((negociacoesImportadas) => {
            negociacoesImportadas.map((negociacaoImportada) => {
                this.negociacoes.adiciona(new Negociacao(new Date(), negociacaoImportada.vezes, negociacaoImportada.montante));
            });
            return this.negociacoes;
        }));
    }
}
