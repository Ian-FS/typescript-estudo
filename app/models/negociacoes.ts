import { Imprimivel } from '../interfaces/imprimivel.js';
import { Negociacao } from './negociacao.js';


export class Negociacoes implements Imprimivel {
    private negociacoes: Array<Negociacao> = []

    public adiciona(negociacao: Negociacao) {
        const isAdd = this.lista().some((negociacaoAdicionada) => negociacao === negociacaoAdicionada)
        !isAdd && this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    public jaFoiAdicionada(negociacaoAAdicionar: Negociacao): boolean {
        function ehIgual(negociacaoAtual:Negociacao): boolean {
            return (
                negociacaoAtual.data.getDate() === negociacaoAAdicionar.data.getDate() &&
                negociacaoAtual.quantidade === negociacaoAAdicionar.quantidade &&
                negociacaoAtual.valor === negociacaoAAdicionar.valor
            )
        }
        return this.negociacoes.some(ehIgual)
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2)
    }
}