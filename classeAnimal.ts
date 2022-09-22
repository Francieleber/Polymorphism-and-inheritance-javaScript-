export {classeAnimal}

class classeAnimal {
    nome: string
    idade:number
    som:string
    funcao:string
    
    constructor(nome:string,idade:number,som:string,funcao:string){
        this.nome= nome
        this.idade= idade
        this.som= som
        this.funcao=funcao
    }

    mostrarInformacoes(){
        console.log(`o meu  animal ${this.nome} tem apenas ${this.idade } aninhos e faz  ${this.som} e so vive ${this.funcao}`)
    }

}