var titulo = document.querySelector(".titulo");
titulo.textContent = 'Aparecida Nutricionista';

var paciente = document.querySelector('#primeiro-paciente')

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
}

if(altura <= 0 || altura >= 3 ){
    tdIMC.textContent='Altura incorreta';
    alturaEhValido=false;
}

if(pesoEhValdo && alturaEhValido){
    tdIMC.textContent = calculaImc;
}