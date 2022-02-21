var campoFiltra = document.querySelector("#filtrar-tabela");

campoFiltra.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".pacientes")

    for (i = 0; i < pacientes.length; i ++){
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
    }
})