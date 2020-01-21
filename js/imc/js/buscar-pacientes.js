var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientesx");

	xhr.addEventListener("load", function() {
		var erroAjax = document.querySelector("#erro-ajax");
		if (xhr.status == 200) { //testa se o resultado é 200
			erroAjax.classList.add("invisivel");
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta);

			pacientes.forEach(function(paciente) {
				adicionaPacienteNaTabela(paciente);
			});
		} else { //se outros resultados
			erroAjax.classList.remove("invisivel");
		}
	});

	xhr.send();
});