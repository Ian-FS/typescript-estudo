import { View } from './view.js';
export class mensagemView extends View {
    template(mensagem) {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `;
    }
    update(mensagem) {
        this.elemento.innerHTML = this.template(mensagem);
    }
}
