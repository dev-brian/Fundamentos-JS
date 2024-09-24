// if, else if, else
let age = 18;
if (age >= 18) {
    console.log("Eres mayor de edad");
} else if (age > 15) {
    console.log("Es niño");
} else {
    console.log("Es menor que un niño");
}
//Truthy and Falsy values
//myNumber = 0; //falsy value
//myNumber > 10; //truthy value
//myStr = '' //falsy value
//myStr = 'Hi' //truthy value
// asignar usuario por defecto
let username = '';
let defaultName;

if (username) {
    defaultName = username;
} else {
    defaultName = 'Stranger';
}

if (username !=='') {
    defaultName = username;
} else {
    defaultName = 'Stranger';
}

defaultName = username || 'Stranger';
console.log(defaultName);

(age >= 18)
    ?console.log("Eres mayor de edad")
    :console.log("Eres menor de edad");

/* operador ternario
expr ? true : false; */
defaultName = username ? username : 'Stranger';
console.log(defaultName);

//switch case
const day = Math.floor(Math.random()*7);
switch(day){
    case 0:
        console.log("Es Domingo");
        break;
    case 1:
        console.log("Es Lunes");
        break;
    case 2:
        console.log("Es Martes");
        break;
    case 3:
        console.log("Es Miercoles");
        break;
    case 4:
        console.log("Es Jueves");
        break;
    case 5:
        console.log("Es Viernes");
        break;
    case 6:
        console.log("Es Sabado");
        break;
    default:
        console.log("Dia no valido");
        break;
}

