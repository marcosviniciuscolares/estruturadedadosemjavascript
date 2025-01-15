function sauda(nome){
    console.log("Olá " + nome + "!")
    sauda2(nome);
    console.log("Preparando para dar tchau....");
    tchau();
}


function sauda2(nome){
    console.log("Opa, iae como vai? " + nome);
}

function tchau(){
    console.log("ok, tchau!");
}

sauda("Marcos");

