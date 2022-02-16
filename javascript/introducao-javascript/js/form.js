/*addEventListinner com função anonima */
var botaoPacente = document.querySelector('#adicionar-paciente');

botaoPacente.addEventListener('click', function(e){
    e.preventDefault();

    //capturando os elementos do formulário
    var form =document.querySelector('#form-adiciona')

    var paciente = obtemPacienteDoFormulario(form)

    //criando tr e td do paciente
    var pacienteTr = montarTr(paciente)

    //adicionando a nova linha na tabela principal
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
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

function montarTr(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

    /*como era
    //criando colunas da tabela
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imctd = document.createElement('td');

    //adicionando os valores capturados no input nas colunas
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imctd.textContent = paciente.imc;

    //adicionando as colunas como elemento filhos de tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imctd);*/

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