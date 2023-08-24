import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel{
    

    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ){
        super()
    }
    
    public static criaDe(inputData:string, inputQuantidade: string, inputValor: string): Negociacao {
        const exp = /-/g;
        const data = new Date(inputData.replace(exp, ','));
        const quantidade = parseInt(inputQuantidade);
        const valor = parseFloat(inputValor);

        return new Negociacao(data, quantidade, valor); 
    }

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data;
    }

    get quantidade(): number {
        const quantidade = this._quantidade
        return quantidade;
    }

    get valor(): number {
        const valor = this._valor
        return valor;
    }

    get volume(): number {
        const volume = this._quantidade * this._valor
        return volume;
    }

    public paraTexto(): string {
        return `
        Data: ${this._data}
        Quantidade: ${this._quantidade}
        Valor: ${this._valor}
        `
    }
}