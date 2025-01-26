let votaram = new Map();

function verfificaEleitor(nome){
    if(votaram.has(nome)){
        console.log("Mande embora!");
    }else{
        votaram.set(nome, true);
        console.log("Deixe votar!");
    }
}

verfificaEleitor("Tom");
verfificaEleitor("Marcos");
verfificaEleitor("Marcos");