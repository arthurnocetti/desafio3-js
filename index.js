class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        switch(this.tipo){
            case "mago":
                console.log(`O ${this.tipo} atacou usando magia`)
            break; 
            case "monge":
                console.log(`O ${this.tipo} atacou usando artes marciais`) 
            break; 
            case "ninja":
                console.log(`O ${this.tipo} atacou usando shuriken`)
            break; 
            default: 
                console.log(`O ${this.tipo} atacou usando espada`)
        }
    }

}

let heroi1 = new heroi("João", 28, "guerreiro")
let heroi2 = new heroi("Maria", 32, "mago")

heroi1.atacar()
heroi2.atacar()
