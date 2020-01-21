function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
function calculaIMC(altura,peso){
	var imc = (peso / (altura * altura));
	return imc.toFixed(2);
}

var pacientes = document.querySelectorAll(".paciente"); //pega todos os pacientes

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);;


  if (alturaEhValida && pesoEhValido) {
        tdImc.textContent = calculaIMC(altura,peso); //arredonda
    }
}
