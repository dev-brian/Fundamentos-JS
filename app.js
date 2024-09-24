/* console.log("Hello World")
alert("eh que rollo") */

//apuntar al div
const ball =document.querySelector('div');
const message =document.querySelector('h1');

const eightBall = () =>{
    //TODO
    //crear número aleatorio (0-8)
    const randomNumber = Math.floor(Math.random()*9);
    //switch/case para mensajes distintos
    switch(randomNumber){
        case 0:
            message.innerText=("Eri un monkey 🐒");
            break;
        case 1:
            message.innerText=("One Coin 🪙");
            break;
        case 2:
            message.innerText=("Facil?");
            break;
        case 3:
            message.innerText=("caiste🫵");
            break;
        case 4:
            message.innerText=("Rata Piedra Preciosa 🐀💎");
            break;
        case 5:
            message.innerText=("Diavlo que dificil me la pusiste😈");
            break;
        case 6:
            message.innerText=("La cabra 🐐");
            break;
        case 7:
            message.innerText=("el 7 es el de la suerte");
            break;
        case 8:
            message.innerText=("Le diste 🎱");
            break;
        default:
            message.innerText=("Num no valido");
            break;
    }
/*     message.innerText = "¡Le diste click🐒!"; */
}

ball.addEventListener('click',eightBall);
