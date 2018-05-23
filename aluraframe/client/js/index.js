var campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];

console.log(campos);
// pegando o tbody da tabela
var tbody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function(event){
	// não deixa a página carregar ao clicar em submit
	event.preventDefault();

	// criar um novo campo tr
	var tr = document.createElement('tr');

	// laço para acessar os values dos campos (que é um array)
	campos.forEach(function(campo){
		// cria o td
		var td = document.createElement('td');
		// coloca no td criado o valor do campo
		td.textContent = campo.value;
		// adiciona este td criado no tr criado
		tr.appendChild(td);
	});

	// o td volume é o cálculo da quantidade * o valor, por isso, não está no laço acima, e aqui está sendo criado
	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value * campos[2].value;

	// adicionando o td volume no tr criado
	tr.appendChild(tdVolume);

	// adicionando o tr no tbody da tabela
	tbody.appendChild(tr);

	// limpando o formulário

	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;

	// dando foco para o campo data

	campos[0].focus();

});