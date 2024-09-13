//hi! I'm Brian and I'm from Huamantla

const name= "Francisco";
const city= 'Huamantla';

console.log("hi! I'm "+ name + "\n and I'm from " + city);
console.log('hi! I\'m '+ name + '\n and I\'m from ' + city); //se usa el "\" back slash para no tener problemas con las comillas simples

// Templates literals
console.log(`hi! I'm ${name} 
and I'm from ${city}`);

//Metodos 
const message = `hi! I'm ${name} and I'm from ${city}`

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hi!'));
console.log(message.indexOf('Francisco'));
console.log(message.split(' '));
console.log("(●'◡'●) ᓚᘏᗢ ".repeat(5));

