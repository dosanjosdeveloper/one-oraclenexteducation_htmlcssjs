var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscar Pacientes");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
  var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.remove("visivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.response);
            console.log(xhr.response);

          
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();

})

/**
 * Buscando a API
 * https://api-pacientes.herokuapp.com/pacientes
*/