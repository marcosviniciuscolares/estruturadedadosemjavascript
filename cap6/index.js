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


let filaDePesquisa = new Deque();
filaDePesquisa.addBack(...grafo["Você"]);

function pessoaEvendedor(pessoa){
    return pessoa === "É vendendor!";
}

pessoaEvendedor(grafo["claire"]);

while(!filaDePesquisa.isEmpty()){
    let pessoa = filaDePesquisa.removeFront();
    if(pessoaEvendedor(pessoa)){
        console.log(`${pessoa} é um vendedor de manga!`);
        return true;
    }else{
        if(grafo[pessoa]){//filaDePesquisa += grafo[pessoa]; não se usa += para concatenar arrays se usa .addBack
            filaDePesquisa.addBack(...grafo[pessoa]);
        }
    }
}

return false;