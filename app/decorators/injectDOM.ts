export function injectDOM (seletor: string) {
    return function(
        target: any,
        propertyKey: string
    ) {
        const getter = function() {
            const elemento  = document.querySelector(seletor)
            return elemento
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            {get: getter}
        )
    }
}