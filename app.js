// console.dir(clientes)
// console.log(clientes[2])  //mostrar 1 valor
// clientes[3] = "Cliente29" //alterar 1 valor
// console.dir(clientes)
// clientes.push("clienteFinal")  //adicionar 1 valor no final
// console.dir(clientes)

// let clientesCadastro = new Array()
// clientesCadastro.push("Nome")
// clientesCadastro.push("Idade")
// clientesCadastro.push("CPF/CNPJ")
// clientesCadastro.push("Telefone")
// clientesCadastro.push("E-mail")
// console.dir(clientesNomes)

let clientesNomes = new Array()
clientesNomes.push("Gustavo")
clientesNomes.push("Murilo")
clientesNomes.push("Felipe")
clientesNomes.push("Enzo")
clientesNomes.push("Luiz")
console.dir(clientesNomes)

document.getElementById("conteudo").innerHTML = "<ul>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNomes[0] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNomes[1] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNomes[2] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNomes[3] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNomes[4] + "</li>"
document.getElementById("conteudo").innerHTML += "</ul>"

