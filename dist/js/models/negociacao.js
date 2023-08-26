export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    static criaDe(inputData, inputQuantidade, inputValor) {
        const exp = /-/g;
        const data = new Date(inputData.replace(exp, ','));
        const quantidade = parseInt(inputQuantidade);
        const valor = parseFloat(inputValor);
        return new Negociacao(data, quantidade, valor);
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        const quantidade = this._quantidade;
        return quantidade;
    }
    get valor() {
        const valor = this._valor;
        return valor;
    }
    get volume() {
        const volume = this._quantidade * this._valor;
        return volume;
    }
    paraTexto() {
        return `
        Data: ${this._data}
        Quantidade: ${this._quantidade}
        Valor: ${this._valor}
        `;
    }
}
