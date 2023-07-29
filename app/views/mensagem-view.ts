export class mensagemView {

    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    template(mensagem: string) {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `
        
    }

    update(mensagem: string) {
        this.elemento.innerHTML = this.template(mensagem)
    }
}