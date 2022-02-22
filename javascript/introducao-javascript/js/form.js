/*addEventListinner com função anonima */
var botaoPacente = document.querySelector('#adicionar-paciente');

botaoPacente.addEventListener('click', function(e){
    e.preventDefault();

    //capturando os elementos do formulário
    var form =document.querySelector('#form-adiciona')

    var paciente = obtemPacienteDoFormulario(form)

    //criando tr e td do paciente
   

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    //adicionando a nova linha na tabela principal
    adicionaPacienteNatabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML="";
})

function adicionaPacienteNatabela(paciente){
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML="";
   /*maneira 1 de fazer
    for(var i = 0; i < erros.length; i++){
        var erro = erro[i];
    }*/
    //maneira 2 de fazer
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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

function montarTr(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

    //como ficou
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Precisa adicionar um nome!")
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco")
    }
    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser em branco")
    }
    if(paciente.peso.length == 0){
         erros.push("A altura não pode ser em branco")
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}