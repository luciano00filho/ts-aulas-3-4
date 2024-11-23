export function somar(arr:Array<number>){
    return arr.reduce((soma, num) => soma + num, 0);
}

export function mostrarMaior(arr:Array<number>){
    return Math.max(...arr);
}

export function mostrarMenor(arr:Array<number>){
    return Math.min(...arr);
}