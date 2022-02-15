var titulo = document.querySelector(".titulo");
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente')

for(var i =0; i < pacientes.length; i++){
    var paciente = pacientes[i];

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdIMC = paciente.querySelector(".info-imc");

var calculaImc = peso/(altura * altura);

var pesoEhValido = true;
var alturaEhValido = true;

if (peso <=0 || peso >= 1000){
    tdIMC.textContent='Peso incorreto!'
    pesoEhValido=false;
   // paciente.style.backgroundColor='red';
    paciente.classList.add('paciente-invalido');
}

if(altura <= 0 || altura >= 3 ){
    tdIMC.textContent='Altura incorreta';
    alturaEhValido=false;
    //paciente.style.backgroundColor='red';
    paciente.classList.add('paciente-invalido');
}

if(pesoEhValido && alturaEhValido){
    tdIMC.textContent = calculaImc.toFixed(2);
}

}

/*Atividade escuta o click no html */

/*addEventListinner com função nomeada
titulo.addEventListener('click', aparecida)

function aparecida(){
    console.log('Olá Mundo!, clicou!')
} */

/*addEventListinner com função anonima */

var botaoPacente = document.querySelector('#adicionar-paciente');

botaoPacente.addEventListener('click', function(e){
    e.preventDefault();

    //capturando os elementos do formulário
    var form =document.querySelector('#form-adiciona')

    //adicionando cada valor do input em uma variável
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //criando elementos html com js

    //criando uma linha da tabela
    var pacienteTr = document.createElement('tr');

    //criando colunas da tabela
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imctd = document.createElement('td');

    //adicionando os valores capturados no input nas colunas
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //adicionando as colunas como elemento filhos de tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //adicionando a nova linha na tabela principal
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


})