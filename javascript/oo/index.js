class Cliente {
    nome;
    cpf;   
    rg;
}

class ContCorrente{
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Marcelo";
cliente1.cpf = 11122233345;


const cliente2 = new Cliente();
cliente2.nome = "Henrique";
cliente2.cpf = 11122233367;

const contaCorrenteHenrique = new ContCorrente();
contaCorrenteHenrique.saldo = 0;
contaCorrenteHenrique.agencia = 1001;