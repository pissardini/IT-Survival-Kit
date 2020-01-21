var pacientes = document.querySelectorAll(".paciente"); //pega todos os pacientes

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        //paciente.style.color="red";
        //paciente.style.background="red";
        paciente.classList.add("paciente-invalido"); //adiciona classe do css
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        //paciente.style.color="red";    //modifica linha
        //paciente.style.background="red"; //usa background
        paciente.classList.add("paciente-invalido"); //adiciona classe do css
                                                     //Cuidado! A função .add() deve receber apenas o nome da classe, e não o seletor CSS de ponto também!
													//Se quisermos adicionar a classe "titulo" , deveremos usar apenas .add("titulo").
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = (peso / (altura * altura));
        tdImc.textContent = imc.toFixed(2); //arredonda
    }
}

/* Trata os dados recebidos do formulário */

var botaoAdicionar = document.querySelector("#adicionar-paciente");


botaoAdicionar.addEventListener("click", function(event) { //escuta evento ao clique

    event.preventDefault(); 

    /*O comportamento padrão do botão que se encontra no formulário é limpar os dados 
    preenchidos nos campos, recarregar a página e enviar os dados. Nós queremos evitar esse 
    comportamento padrão.

    Para isso, devemos chamar uma função característica dos eventos, que faz com que o evento 
    não faça seu comportamento padrão. Desta forma, ele não executará este comportamento e 
    reagirá conforme o que pedimos no evento, no caso, a exibição de uma mensagem. 
    Implementaremos a função event.preventDefault():*/

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value; //pega o valor do form - nome 
    var peso = form.peso.value; //pega o valor do form - peso
    var altura = form.altura.value; //pega o valor do form - altura
    var gordura = form.gordura.value; //pega o valor do form - gordura

    var pacienteTr = document.createElement("tr"); //riando elemento HTML - igual do arquivo

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc.toFixed(2);

    pacienteTr.appendChild(nomeTd); //Ela adiciona como filho o elemento passado a ela como parâmetro.Pq senão é
                                    //apenas linear
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes"); //seleciona a tabela

    tabela.appendChild(pacienteTr); //adiciona o paciente

});