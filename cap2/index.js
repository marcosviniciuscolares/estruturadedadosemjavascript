function buscarMenor(listaArray){

    let menor = listaArray[0]; //armazena o menor valor
    let menor_indice = 0; //armazena o indice do menor valor
    
    for(let i = 1; i < listaArray.length; i++){
        if(listaArray[i] < menor){
            menor = listaArray[i]; //pega o menor valor do array e armazena na variável "menor";
            menor_indice = i; //armazena na variável "menor_indice" o indice do menor valor;
        }
    }
    return menor_indice;
}

function ordenacaoPorSelecao(myArray){
    let novoArray = [];

    for(let i = 0; i < myArray.length; i++){
        let menor = buscarMenor(myArray); // utiliza a função buscarMenor para achar o menor valor do myArray;
        novoArray.push(myArray.splice(menor, 1)[0]); //pega o valor da variável "menor" e adiciona no MyArray;
    }
    return novoArray;
}

const lista = [2,5,6,3,1,4];

console.log(ordenacaoPorSelecao(lista));

