
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

    obtemPacienteDoFormulario(form)
    console.log(paciente);

    //adicionando cada valor do input em uma variável
    /*var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;*/
    

    /*criando elementos html com js*/
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
    imctd.textContent = calculaImc(peso,altura);

    //adicionando as colunas como elemento filhos de tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imctd);

    //adicionando a nova linha na tabela principal
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
})

function obtemPacienteDoFormulario(form){
    var paciente={
         nome: form.nome.value,
         peso: form.peso.value,
         altura: form.altura.value,
         gordura: form.gordura.value,
         imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;

}