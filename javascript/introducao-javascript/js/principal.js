var titulo = document.querySelector(".titulo");
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente')
/*
for(var i =0; i <= pacientes.length; i++){
    var paciente = pacientes[i];
/*
var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdIMC = paciente.querySelector('.info-imc');

var calculaImc = peso/(altura * altura);

var pesoEhValdo = true;
var alturaEhValido = true;

if (peso <=0 || peso >= 1000){
    tdIMC.textContent='Peso incorreto!'
    pesoEhValdo=false;
   // paciente.style.backgroundColor='red';
    paciente.classList.add('paciente-invalido');
}

if(altura <= 0 || altura >= 3 ){
    tdIMC.textContent='Altura incorreta';
    alturaEhValido=false;
    //paciente.style.backgroundColor='red';
    paciente.classList.add('paciente-invalido');
}

if(pesoEhValdo && alturaEhValido){
    tdIMC.textContent = calculaImc.toFixed(2);
}

}*/

/*Atividade escuta o click no html */

/*addEventListinner com função nomeada */
titulo.addEventListener('click', aparecida)

function aparecida(){
    console.log('Olá Mundo!, clicou!')
}

/*addEventListinner com função anonima */

var botaoPacente = document.querySelector('#adicionar-paciente');

botaoPacente.addEventListener('click', function(e){
    e.preventDefault();
    console.log("Olá Mundo!, estou no console!")
})