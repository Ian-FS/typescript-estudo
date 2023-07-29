export class mensagemView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(mensagem) {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `;
    }
    update(mensagem) {
        this.elemento.innerHTML = this.template(mensagem);
    }
}
