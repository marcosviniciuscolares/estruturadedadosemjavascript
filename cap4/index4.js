function quicksort(array){
    if(array.length < 2){
        return array;
    } else {
        let pivo = array[0];
        let menores = array.slice(1).filter(i => i <= pivo);
        let maiores = array.slice(1).filter(i => i > pivo);
        return quicksort(menores) + pivo + quicksort(maiores);
    }
}

console.log(quicksort([10, 1, 3, 2, 5, 6, 7, 9, 8, 4]));