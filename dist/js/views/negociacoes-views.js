export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
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
                    ${this.novaNegociacao}
                </tbody>
            </table>
        `;
    }
    update(data, quantidade, valor) {
        this.novaNegociacao = `
        <tr>
            <th>${data.getTime()}</th>
            <th>${quantidade}</th>
            <th>${valor}</th>
        </tr>
        `;
    }
    exibir() {
        this.elemento.innerHTML = this.template();
    }
}
