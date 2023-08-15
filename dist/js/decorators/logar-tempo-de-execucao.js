export function logarTempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.time(propertyKey);
            metodoOriginal.apply(this, args);
            console.timeEnd(propertyKey);
        };
    };
}
