class Deque {
    constructor() {
        this.items = [];
    }

    addFront(element) {
        this.items.unshift(element);
    }

    addBack(element) {
        this.items.push(element);
    }

    removeFront() {
        return this.items.shift();
    }

    removeBack() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    peekFront() {
        return this.items[0];
    }

    peekBack() {
        return this.items[this.items.length - 1];
    }
}

const grafo = {}
grafo["Você"] = ["alice", "bob", "claire"];
grafo["bob"] = ["anuj", "peggy"];
grafo["alice"] = ["peggy"];
grafo["claire"] = ["tom", "jhonny"];

function pessoaEvendedor(pessoa) {
    return pessoa === "bob"; // Exemplo de lógica para verificar se a pessoa é um vendedor
}

function pesquisa(nome){

    let filaDePesquisa = new Deque();
    filaDePesquisa.addBack(...grafo[nome]);
    let verificadas = [];

    while(!filaDePesquisa.isEmpty()){
        let pessoa = filaDePesquisa.removeFront();
        if(!verificadas.includes(pessoa)){
            if(pessoaEvendedor(pessoa)){
                console.log(`${pessoa} é um vendendor!`);
                return true;
            }else{
                if(grafo[pessoa]){
                    filaDePesquisa.addBack(...grafo[pessoa]);
                    verificadas.push(pessoa);
                }
            }
        }
    }
    return false;
}

pesquisa("Você");