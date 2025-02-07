const estadosAbranger = new Set(['sp', 'ma', 'es', 'am', 'mg', 'rj', 'mt', 'ms']); // Passo um array como entrada e o Set converte para um conjunto, conjuntos não podem ter elementos duplicados

const estacoes = {};

estacoes['kum'] = new Set(['sp', 'ma', 'es']);
estacoes['kdois'] = new Set(['am', 'sp', 'rj']);
estacoes['ktres'] = new Set(['mt', 'ma', 'ms']);
estacoes['kquatro'] = new Set(['ma', 'es']);
estacoes['kcinco'] = new Set(['ms', 'mg']);

const estacoesFinais = new Set();


while(estadosAbranger.size > 0){
    let melhorEstacao = null;
    let estadosCobertos = new Set();
    for(const[estacao, estados] of Object.entries(estacoes)){
        let cobertos = new Set([...estadosAbranger].filter(estado => estados.has(estado)));
        if(cobertos.size > estadosCobertos.size){
            melhorEstacao = estacao;
            estadosCobertos = cobertos;
        }
    }
    //estadosAbranger -= estadosCobertos;
    for(const estado of estadosCobertos){
        estadosAbranger.delete(estado);
    }
    estacoesFinais.add(melhorEstacao);
}

console.log(estacoesFinais);