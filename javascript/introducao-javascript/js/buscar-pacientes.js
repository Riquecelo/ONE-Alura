var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener('click', function(){
    //console.log(botaoAdicionar)

    //requisição com javascript
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var pacienteJson = JSON.parse(resposta);

        pacienteJson.forEach(function(paciente) {
            adicionaPacienteNatabela(paciente)
        });
    })

    xhr.send()
})