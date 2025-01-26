const cache = new Map();

function pegarPagina(url){
    if(cache.get(url)){
        return cache[url]; //Retorna os dados do cache
    }else{
        let dados = pegarDadosDoServidor(url);
        cache[url] = dados; //Salva esses dados primeiro no meu cache
        return dados;
    }
}