import { NegociacaoDoDia } from '../interfaces/negociacao-do-dia.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from './../models/negociacoes.js';
export class NegociacoesService {

    private negociacoes = new Negociacoes
    
    public obterNegociacoesDoDia(): Promise<Negociacoes>{
        return (
            fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((negociacoesImportadas: NegociacaoDoDia[])=> {
                negociacoesImportadas.map (
                    (negociacaoImportada) => {
                        this.negociacoes.adiciona(
                            new Negociacao(
                                new Date(),
                                negociacaoImportada.vezes,
                                negociacaoImportada.montante
                            )
                        )
                    }
                )
                return this.negociacoes
            })
            
        )
    }
}