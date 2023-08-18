export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log('aplicando o decorator escape');
            retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
