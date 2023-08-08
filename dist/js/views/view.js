export class View {
    constructor(seletor, escape) {
        this.escape = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
            escape ? this.escape = escape : this.escape = false;
        }
        else {
            throw Error("Seletor não existe no DOM");
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
