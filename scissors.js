const btnPlay = document.querySelector('#div1'); // Apuntar al botón
const imgUser = document.querySelector('#img1'); // Apuntar a la imagen del usuario
const imgComputer = document.querySelector('#img2'); // Apuntar a la imagen de la computadora
const userText = document.querySelector('#userText'); // Apuntar al texto del usuario
const computerText = document.querySelector('#computerText'); // Apuntar al texto de la computadora
const message = document.querySelector('#div4'); // Apuntar al div donde se muestra el resultado
let choiceUser = ""; // Variable para guardar la elección del usuario

const play = () => {
    choiceUser = prompt("Elije: piedra, papel o tijeras").toLowerCase();
    userText.innerText = `Usuario: ${choiceUser}`;
    
    switch (choiceUser) {
        case 'piedra':
            imgUser.src = "./rock.png";
            break;
        case 'papel':
            imgUser.src = "./paper.png";
            break;
        case 'tijeras':
            imgUser.src = "./scissors.png";
            break;
        default:
            imgUser.src = "";
            break;
    }
    
    const aleatorio = Math.floor(Math.random() * 3);
    let choiceComputer = "";
    
    switch (aleatorio) {
        case 0:
            choiceComputer = 'piedra';
            imgComputer.src = "./rock.png";
            break;
        case 1:
            choiceComputer = 'papel';
            imgComputer.src = "./paper.png";
            break;
        case 2:
            choiceComputer = 'tijeras';
            imgComputer.src = "./scissors.png";
            break;
        default:
            imgComputer.src = "";
            break;
    }
    
    computerText.innerText = `Computadora: ${choiceComputer}`;
    
    // Comparaciones para determinar al ganador
    if (choiceUser === choiceComputer) {
        message.innerText = "Empate";
    } else if (
        (choiceUser === 'piedra' && choiceComputer === 'tijeras') ||
        (choiceUser === 'papel' && choiceComputer === 'piedra') ||
        (choiceUser === 'tijeras' && choiceComputer === 'papel')
    ) {
        message.innerText = "Ganaste";
    } else {
        message.innerText = "Perdiste";
    }
};

btnPlay.addEventListener('click', play);
