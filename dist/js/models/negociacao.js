export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
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
}
