import Trasacao  from "./Transacao";

export default class ListaTrasacao{

    constructor(){
        this.historico = [];
        this.saldo = 0;
        this.receitas = 0;
        this.despesas = 0;
    }
    
    addTasacao(id, descripition, value, type){
        const transacao = new Trasacao(id, descripition, value, type);
        this.historico.push(transacao);

        this.saldo = 0;
        this.receitas = 0;
        this.despesas = 0;

        this.historico.map((item) => {
            if(item.type == 'receita'){
                this.receitas = Number(this.receitas) + Number(item.value);
            }
            else{
                this.despesas = Number(this.despesas) + Number(item.value);
            }
            this.saldo = Number(this.receitas) - Number(this.despesas);
    })}

    excluirTrasacao(id){
        this.historico = this.historico.filter((item) => item.id != id);
        
        this.atualizarValores();
    }

    getHistorico(){
        return this.historico;
    }

    atualizarValores(){
        this.saldo = 0;
        this.receitas = 0;
        this.despesas = 0;

        this.historico.map((item) => {
            if(item.type == 'receita'){
                this.receitas = Number(this.receitas) + Number(item.value);
            }
            else{
                this.despesas = Number(this.despesas) + Number(item.value);
            }
            this.saldo = Number(this.receitas) - Number(this.despesas);
        })
    }
    getTrasacaoId(id){
        return this.historico.find((item) => item.id == id);
    }
    atualizarTrasacao(id, descripition, value){
        const transacao = this.getTrasacaoId(id);

        if(transacao){
        transacao.description = descripition;
        transacao.value = value;
        }
        
        this.atualizarValores();

        return transacao;
    }
}