export function injectDOM (seletor: string) {
    return function(
        target: any,
        propertyKey: string
    ) {

        let elemento: HTMLElement
        const getter = function() {
            if(!elemento) {
                console.log('buscando elemento do DOM')
                elemento  = document.querySelector(seletor) as HTMLInputElement
            }

            return elemento
        }
        
        Object.defineProperty(
            target, 
            propertyKey, 
            {get: getter}
        )
    }
}