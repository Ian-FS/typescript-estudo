import { Negociacao } from '../models/negociacao';
import { Negociacoes } from './../models/negociacoes';
export class NegociacoesView {
    private elemento: HTMLElement;
    private novasNegociacoes: Array<string>;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }

    template(): string {

        const negociacoes: string = 

        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.novasNegociacoes.map(novaNegociacao => novaNegociacao)}
                </tbody>
            </table>
        `
    }

    update(negociacoes:Array<Negociacao>): void  {

        negociacoes.forEach(negociacao => {
            this.novaNegociacao.push(
                `
                <tr>
                    <th>${negociacao.data.getTime()}</th>
                    <th>${negociacao.quantidade}</th>
                    <th>${negociacao.valor}</th>
                </tr>
            `
            )
        })
    }
    exibir(){
        this.elemento.innerHTML = this.template();
    }
}