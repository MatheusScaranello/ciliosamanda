class Livro {
    constructor(titulo, autor, ano, id) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.id =  id || this.generedId()
    }
    generedId() {
        return Math.round(Math.random() * 1000)
    }
    getInfo() { 
        return `O livro ${this.titulo} foi escrito por ${this.autor} em ${this.ano}`
       }
}

class Livros{
    constructor(){
        this.livros = []
    }
    add(livro){
        this.livros.push(livro)
    }
    
}

export default Livros