export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        const isAdd = this.lista().some((negociacaoAdicionada) => negociacao === negociacaoAdicionada);
        !isAdd && this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    jaFoiAdicionada(negociacaoAAdicionar) {
        function ehIgual(negociacaoAtual) {
            return (negociacaoAtual.data.getDate() === negociacaoAAdicionar.data.getDate() &&
                negociacaoAtual.quantidade === negociacaoAAdicionar.quantidade &&
                negociacaoAtual.valor === negociacaoAAdicionar.valor);
        }
        return this.negociacoes.some(ehIgual);
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
