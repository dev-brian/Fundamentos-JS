/* Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string con el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

const cube = createCube(3)
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: /, \, _ y (espacio en blanco).

Otros ejemplos de cubos:

const cubeOfOne = createCube(1)
/\_\
\/_/
const cubeOfTwo = createCube(2)
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/ */


//Solucion mia

function createCube(size) {
    const arrayA =[];
    const frenteA= '/\\';
    const traseraA= '_\\';
    for (let i = 0; i < size; i++) {
        let fila = ' '.repeat(i);
        fila += frenteA.repeat(size-i);
        fila += traseraA.repeat(size);
        arrayA.unshift(fila);
    }
    const arrayB =[];
    const frenteB= '\\/';
    const traseraB= '_/';
    for (let i = 0; i < size; i++) {
        let filaB = ' '.repeat(i);
        filaB += frenteB.repeat(size-i);
        filaB += traseraB.repeat(size);
        arrayB.push(filaB);
    }
    return arrayA.join('\n')+('\n')+arrayB.join('\n');
}

//solucion maestro
/* function createCube(size) {
    const arrayA =[];
    const frenteA= '/\\';
    const traseraA= '_\\';
    const frenteB= '\\/';
    const traseraB= '_/';
    for (let i = 0; i < size; i++) {
        let fila = ' '.repeat(i);
        fila += frenteA.repeat(size-i);
        fila += traseraA.repeat(size);
        let filaB = ' '.repeat(i);
        filaB += frenteB.repeat(size-i);
        filaB += traseraB.repeat(size);
        arrayA.unshift(fila);
        arrayA.push(filaB);
    }
    
    for (let i = 0; i < size; i++) {
        
    }
    return arrayA.join('\n');
} */

const cube =createCube(4);
console.log(cube);
