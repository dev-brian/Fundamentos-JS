//Sin parametros y sin retorno
function SayHello(){
    console.log("Hello");
}

SayHello();

//Con parametros y sin retorno
function SayHelloTo(name) {
    console.log("Hello"+name);
}

SayHelloTo("Juan");

//Con parametros y con retorno
function sum(n1, n2) {
    return n1+n2;
}

const result =sum(5,7);
console.log(result);

//Con parametros opcionales
function multiply(n1,n2=1) {
    return n1, n2;
}

console.log(multiply(5));
console.log(multiply(5,3));

//Funciones anónimas 
setTimeout(function(){
    console.log("Hola mundo");
},1000);

const duplicate = function (num){
    return num *2;
}

console.log(duplicate (2))


//Arrow funtions
//(), =>, {}

    const SayHello2 = () =>{
        console.log("Hello2");
    }
    SayHello2();
// si tenemos una sola variable podemos omitir los parentesis de name
    const SayHelloTo2 = name => console.log("Hello"+name);
    SayHelloTo2("Peter")

    const sum2 =(n1,n2)=>n1+n2;
    const result2 = sum2(5,7);

    setTimeout(() => console.log("Hola mundo"),1000);





