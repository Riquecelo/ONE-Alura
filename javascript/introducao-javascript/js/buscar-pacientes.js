var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener('click', function(){
    //console.log(botaoAdicionar)
    //requisição com javascript
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;
            var pacienteJson = JSON.parse(resposta);

            pacienteJson.forEach(function(paciente) {
                adicionaPacienteNatabela(paciente)
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
            //console.log(erroAjax)
           
        } 
    })

    xhr.send()
})