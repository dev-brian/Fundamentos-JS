//High Order Functions
//Funciones de Orden Superior
//Funciones que operan con otras funciones, o que devuelven una función

const suma = (a,b)=>a+b;
const resta= (a,b)=>a-b;
const calculator =(a,b, callback)=>{
    const result = callback(a, b);
    console.log(result);
}

calculator(5, 3, suma);
calculator(5, 3, resta);
calculator(5, 3, (a, b)=>a*b);
calculator(5, 3, (a, b)=>a/b);

//const foods= ['tamales', 'pizza', 'chilaquiles', 'pozole', 'tacos', 'maruchan'];

foods.forEach((food)=>console.log(food));
foods.forEach((food)=>console.log(food.length));
foods.forEach((food)=>console.log(food.includes('a')));

const FOODS = foods.map(food => food.toUpperCase());
console.log(FOODS);

const foodemojis = foods.map(food => `${food} 🍖🍖🍖`);
console.log(foodemojis);

const sdoof = foods.map(food =>{
 const separate = food.split('');
 const reverse = separate.reverse();
 const joined = reverse.join('');
 return joined;
 //food => food.split('').reverse().join('')
});

console.log(sdoof);

//declarar un array de numeros
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */
const cuadrados = numbers.map(number => number * number);
const cubos = numbers.map(number => number * number * number);
const mitad = numbers.map(number => number / 2);
console.log(numbers);
console.log(cuadrados);
console.log(cubos);
console.log(mitad);

cuadrados =[]
for (const number of numbers) {
    cuadrados.push(number * number);
}

/* const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
    const envueltos=[];
    for(let gift of gifts){
        const tapa ='*'.repeat(gift.length + 2);
        envueltos.push(`${tapa}\n*${gift}*\n${tapa}`);
    }
    return envueltos;
}
const wrapped = wrapping(gifts) */

function wrapping(gifts) {
    return gifts.map(gift => {
        const tapa ='*'.repeat(gift.length + 2);
        return `${tapa}\n*${gift}*\n${tapa}`;
    });
}


//const foods = ['tamales', 'pizza', 'chilaquiles', 'pozole', 'tacos', 'maruchan'];
const wrappeds = wrapping(foods);
wrappeds.forEach(item => console.log(item));

//Filter
const foods = ['tamales', 'pizza', 'chilaquiles', 'pozole', 'tacos', 'maruchan'];
const containsZ = foods.filter(food => food.includes('z'));
console.log(foods);
console.log(containsZ);


const endsWithS = foods.filter(food => food.endsWith('s'));
console.log(endsWithS);


//pares impares mayores a 5 y menores a 5
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numbers.filter(number => number % 2 === 0);
const impares = numbers.filter(number => number % 2 !== 0);
const mayores = numbers.filter(number => number > 5);
const menores = numbers.filter(number => number < 5);

console.log(pares);
console.log(impares);
console.log(mayores);
console.log(menores);

//forEach, map, filter
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Reduce
const sumatoria = numbers.reduce((a, b) => a + b);
const factorial = numbers.reduce((a, b) => a * b);
console.log(numbers);
console.log(sumatoria);
console.log(factorial);

//some(OR), every(AND)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const positivos = numbers.every(number => number > 0);
console.log(positivos);
const negativos = numbers.every(number => number < 0);
console.log(negativos);

const ages = [22, 18, 24, 20, 19, 21, 23, 17, 16, 15];
const algunos_adultos = ages.some(age => age >= 18);
console.log(algunos_adultos);
const algunos_menores = ages.some(age => age < 18); 
console.log(algunos_menores);

const fruits = ['🍏', '🍐', '🍊', '🍑', '🍒'];

const index_durazno = fruits.findIndex(fruit => fruit === '🍐');
console.log(fruits[index_durazno]);
