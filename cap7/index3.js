const grafo = {};

grafo ["inicio"] = {};
grafo ["inicio"]["a"] = 6;
grafo["inicio"]["b"] = 2;

grafo["a"] = {};
grafo["a"]["fim"] = 1;
grafo["b"] = {};
grafo["b"]["a"] = 3
grafo["b"]["fim"] = 5;

grafo["fim"] = {};


const infinito = Infinity;
const custos = {};

custos["a"] = 6;
custos["b"] = 2;
custos["fim"] = infinito;

const pais = {};

pais["a"] = "inicio";
pais["b"] = "inicio";
pais["fim"] = null;

const processados = [];

let nodo = acheNoCustoMaisBaixo(custos); // Encontre o nó com o menor custo
while (nodo !== null) {  // Enquanto o nó não for nulo
    let custo = custos[nodo]; // Obter o custo do nó atual
    let vizinhos = grafo[nodo]; // Obter os vizinhos do nó atual

    for (let n in vizinhos) { // Iterar sobre os vizinhos
        if (vizinhos.hasOwnProperty(n)) { // Verificar se a chave é uma propriedade direta (não herdada)
            let novoCusto = custo + vizinhos[n]; // Calcular o novo custo
            if (custos[n] > novoCusto) { // Se o novo custo for menor
                custos[n] = novoCusto; // Atualizar o custo
                pais[n] = nodo; // Atualizar o pai
            }
        }
    }

    processados.push(nodo); // Marcar o nó como processado
    nodo = acheNoCustoMaisBaixo(custos); // Encontre o próximo nó com o menor custo
}

/*ARRUMAR DEPOIS*/
function acheNoCustoMaisBaixo(custos){
    let custoMaisBaixo = Infinity;
    let nodoCustoMaisBaixo = null;
    for(nodo in custos){
        let custo = custos[nodo];
        if(custo<custoMaisBaixo && nodo not in processados){
            custoMaisBaixo = custo;
            nodoCustoMaisBaixo = nodo;
        }
    }
    return nodoCustoMaisBaixo;
}

//console.log(grafo["inicio"]["a"], grafo["inicio"]["b"]);