function regressiva(i){
    if(i <= 1){
        console.log(i);
        return;
    }else{
        regressiva(i-1);
        console.log(i);
    }
}

regressiva(5);