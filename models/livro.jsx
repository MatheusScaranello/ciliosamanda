class LivroClass {
    constructor(titulo, autor, paginas, id) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
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
new Livros()

export default Livros
export {LivroClass}