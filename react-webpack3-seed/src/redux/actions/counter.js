export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const RESET = 'RESET';

export function increase() {
    return { type: INCREASE };
}

export function decrease() {
    return { type: DECREASE };
}

export function reset() {
    return { type: RESET };
}
