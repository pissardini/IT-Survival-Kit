/* Trata os dados recebidos do formul�rio */

var botaoAdicionar = document.querySelector("#adicionar-paciente");

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //limpa a tag para n�o acumular erros
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome n�o pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura n�o pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso n�o pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura n�o pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso � inv�lido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura � inv�lida");
    }

    return erros;
}

function criaPaciente(form){
		var paciente = { //criando um objeto chamado paciente
			nome: form.nome.value, //pega o valor do form - nome
			peso: form.peso.value, //pega o valor do form - peso
			altura: form.altura.value, //pega o valor do form - altura
			gordura:form.gordura.value //pega o valor do form - gordura
		};
	return paciente;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function criaEstrutura(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); //associa classe paciente para o elemento TR

	var nomeTd = montaTd(paciente.nome, "info-nome");
	var pesoTd = montaTd(paciente.peso, "info-peso");
	var alturaTd = montaTd(paciente.altura, "info-peso");
	var gorduraTd = montaTd(paciente.gordura, "info-gordura");
	var imcTd = montaTd(paciente.imc, "info-imc");

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd)
	pacienteTr.appendChild(alturaTd)
	pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

botaoAdicionar.addEventListener("click", function(event) { //escuta evento ao clique

    event.preventDefault();

    /*O comportamento padr�o do bot�o que se encontra no formul�rio � limpar os dados
    preenchidos nos campos, recarregar a p�gina e enviar os dados. N�s queremos evitar esse
    comportamento padr�o.

    Para isso, devemos chamar uma fun��o caracter�stica dos eventos, que faz com que o evento
    n�o fa�a seu comportamento padr�o. Desta forma, ele n�o executar� este comportamento e
    reagir� conforme o que pedimos no evento, no caso, a exibi��o de uma mensagem.
    Implementaremos a fun��o event.preventDefault():*/

    var form = document.querySelector("#form-adiciona");

	var paciente = criaPaciente(form);
	var erros     = validaPaciente(paciente);

	var erro = validaPaciente(paciente);

	if (erro.length > 0) {
		exibeMensagensDeErro(erro);
	}

    var pacienteTr = criaEstrutura(paciente);

    var tabela = document.querySelector("#tabela-pacientes"); //seleciona a tabela

    tabela.appendChild(pacienteTr); //adiciona o paciente

	form.reset(); //apaga os dados do formul�rio
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = criaEstrutura(paciente);
    var tabela = document.querySelector("#tabela-pacientes"); //seleciona a tabela
    tabela.appendChild(pacienteTr); //adiciona o paciente
}