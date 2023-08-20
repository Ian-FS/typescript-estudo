export function injectDOM(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                console.log('buscando elemento do DOM');
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
