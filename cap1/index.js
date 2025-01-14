function pesquisa_binária(lista, item){

    let baixo = 0;
    let alto = lista.length - 1;


    while(baixo <= alto){
        meio = (baixo + alto) / 2;
        chute = lista[meio];
        if(chute == item){
            return meio;
        }
        if(chute > item){
            alto = meio - 1;
        }else{
            baixo = meio + 1;
        }
    }
    return null
}

const minhaLista = [1,2,3,4,5,6,7];

console.log(pesquisa_binária(minhaLista, 4));