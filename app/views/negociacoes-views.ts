import { Negociacoes } from '../models/negociacoes';
import { View } from './view.js';
export class NegociacoesView extends View <Negociacoes> {

    protected template(model:Negociacoes): string {
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
                    ${model.lista().map(negociacao => {

                        return `
                            <tr>
                                <th>
                                    ${this.formataData(negociacao.data)}
                                </th>
                                <th>${negociacao.quantidade}</th>
                                <th>${negociacao.valor}</th>
                            </tr>
                        `
                    })}
                </tbody>
            </table>
        `
    }

    private formataData(data:Date): string {
        return new Intl.DateTimeFormat().format(data)
    }
}