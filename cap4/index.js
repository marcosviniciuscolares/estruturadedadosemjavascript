function somar(lista){
    if(lista.length === 0){
        return 0;
    } else {
        return lista[0] + somar(lista.slice(1));
    }
}

console.log(somar([1,2,3,4]));