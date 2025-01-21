const mylist = [1,2,3,4,5];

function contarItens(lista){
    let nItens = 0;
    for(let i = 0; i < lista.length; i++){ //Loop que se baseia no tamanha da lista, ou seja, se a lista tiver 6 elementos, ela vai rodar 6 vezes.
     if(Array.isArray(lista[i])){
        nItens += contarItens(lista[i]);
     } else {
        nItens++;
     }
    }
    return nItens;
}
console.log(contarItens(mylist));
