function maximo(lista){
    if(lista.length === 2){
        if(lista[0] > lista[1]){
            return lista[0]
        } else if(lista[1] > lista[0]){
            return lista[1];
        }
        //return lista[0] > lista[1] ? lista[0] : lista[1]; <--- Operação condicional ternária, é uma forma de escrever uma condição if-else em uma só linha.
    }

    let subMax = maximo(lista.slice(1));
    return lista[0] > subMax ? lista[0] : subMax;
}

const mylist = [1,7,3,4];
console.log(maximo(mylist));