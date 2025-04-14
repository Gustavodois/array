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

document.getElementById("conteudo").innerHTML = clientesNomes[0] + " - "
document.getElementById("conteudo").innerHTML += clientesNomes[1] + " - "
document.getElementById("conteudo").innerHTML += clientesNomes[2] + " - "
document.getElementById("conteudo").innerHTML += clientesNomes[3] + " - "
document.getElementById("conteudo").innerHTML += clientesNomes[4] 