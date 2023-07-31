import { View } from './view.js';
export class mensagemView extends View{

    template(mensagem: string) {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `
        
    }

    update(mensagem: string) {
        this.elemento.innerHTML = this.template(mensagem)
    }
}