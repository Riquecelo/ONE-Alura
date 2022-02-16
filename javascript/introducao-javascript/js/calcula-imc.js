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

//var calculaImc = peso/(altura * altura);

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
    var imc = calculaImc(peso,altura)
    tdIMC.textContent = imc;
}
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso/(altura*altura)

    return imc.toFixed(2);
}

/*Atividade escuta o click no html */

/*addEventListinner com função nomeada
titulo.addEventListener('click', aparecida)

function aparecida(){
    console.log('Olá Mundo!, clicou!')
} */