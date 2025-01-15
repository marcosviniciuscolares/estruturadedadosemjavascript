function procurarPelaChave(caixa){
    for(let item of caixa){
        if(item = eUmaCaixa()){
            procurarPelaChave(item);
        }else if(item = eUmaChave()){ //Recursão;
            console.log("AChei a chave");
        }
    }
}