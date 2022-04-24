class Cliente {
    nome;
    cpf;   
    rg;
}

class ContCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor){
        if(this._saldo >= 0){
            this._saldo += valor;
        }
    }
}


const cliente1 = new Cliente();
cliente1.nome = "Marcelo";
cliente1.cpf = 11122233345;


const cliente2 = new Cliente();
cliente2.nome = "Henrique";
cliente2.cpf = 11122233367;

const contaCorrenteHenrique = new ContCorrente();

contaCorrenteHenrique.agencia = 1001;
contaCorrenteHenrique.depositar(100);
contaCorrenteHenrique.depositar(50)
console.log(contaCorrenteHenrique.saldo)