function binary_search(list, key){

    let baixo = 0;
    let alto = list.length - 1;


    while(baixo <= alto){
        let meio = (baixo + alto) / 2;
        let chute = list[meio];

        if(chute == key){
            return meio;
        }
        if(chute > key){
            alto = meio -1;
        }
        else{
            baixo = meio + 1;
        }
    }
    return null;
}

const lista = [1,2,3,4,5];

console.log(binary_search(lista,3));