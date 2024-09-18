//Coleccion de objetos
// [1,2,3,4]

const numbers = [1,2,3,4];
console.log(numbers);
console.log(numbers[2]);
console.log(numbers[3]);
numbers[4]="four";
numbers[0]=10;
console.log(numbers);

const queue =[];
//insertar al final push
console.log(queue);
queue.push(1);
console.log(queue);
queue.push(2);
console.log(queue);
queue.push(3);
console.log(queue);
//extraer al inicio
console.log(queue.shift())
console.log(queue);
console.log(queue.shift())
console.log(queue);
console.log(queue.shift())
console.log(queue);

//Pila de Arrays en JS
const stack=[];
//insertamos al final
stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(3);
console.log(stack);
stack.push(4);
console.log(stack);
//extraer del final
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);

//con el push sacamos del inicio y con el pop sacamos del final

//Iterar elementos de un array
const pairs = [2,4,6,8,10];
for (let i = 0; i < pairs.length; i++) {
    console.log(pairs[i]);
}
for (num of pairs){
    console.log(pairs[num]);
}



// Este año los elfos han comprado una máquina que envuelve regalos.Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.
// A la máquina se le pasa un array con los regalos.Cada regalo es un string.Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.
// El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados.Por ejemplo:
// const gifts = ['cat', 'game', 'socks']
// const wrapped = wrapping(gifts)
// console.log(wrapped)
// /* [
//   "*****\n*cat*\n*****",
//   "******\n*game*\n******",
//   "*******\n*socks*\n*******"
// ] */
// Como ves, el papel de regalo envuelve el string.Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.
//     Nota: El carácter \n representa un salto de línea.
// ¡Ojo! Asegúrate que pones el número correcto de * para envolver completamente el string.Pero no demasiados.Sólo los necesarios para cubrir el string.
//     Ah, y no modifiques(mutes) el array original.
//solution
const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
    const envueltos=[];
    for(let gift of gifts){
        const tapa ='*'.repeat(gift.length + 2);
        envueltos.push(`${tapa}\n*${gift}*\n${tapa}`);
    }
    return envueltos;
}
const wrapped = wrapping(gifts)