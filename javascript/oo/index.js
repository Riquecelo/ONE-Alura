import { Cliente } from "./Cliente.js";
import { ContCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Marcelo";
cliente1.cpf = 11122233345;


const cliente2 = new Cliente();
cliente2.nome = "Henrique";
cliente2.cpf = 11122233367;


const contaCorrenteHenrique = new ContCorrente();

contaCorrenteHenrique.cliente =cliente2;
contaCorrenteHenrique.agencia = 1001;
contaCorrenteHenrique.depositar(500);
//contaCorrenteHenrique.depositar(50)
//console.log(contaCorrenteHenrique.saldo)

//const valorSacado = contaCorrenteHenrique.sacar(50)

//console.log(valorSacado)
//console.log(contaCorrenteHenrique)

const cliente3 = new Cliente();
cliente3.nome = "Alice";
cliente3.cpf = 789456789;

const conta3 = new ContCorrente();
conta3.cliente = cliente3;
conta3.agencia = 102;

//console.log(conta3)

contaCorrenteHenrique.transferir(200,conta3)
console.log(conta3)
console.log(contaCorrenteHenrique)