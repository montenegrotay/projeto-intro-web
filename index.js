// SEMANA 03
//1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2,
//altere a forma que a característica de array dos itens
//seja escrita como um laço
//que guarde todos os valores da propriedade array do objeto
//em uma mesma string. 
//Utilize esta string no relatório.
//💡 Chamamos este processo de reescrever um código já escrito, de refatoração.
//Exemplo:

//ANTES 
//FULANO
//idade: 33
//verificou email?: false
//projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] 

//DEPOIS
//FULANO 
//idade: 33
//verificou email?: false
//projetos: "Projeto de HTML,Projeto de CSS,Projeto React" 

console.log("============== EX01 ============")

for (i = 0; i <todosOsObjetos.length; i++) {
   console.log("Módulo: "+ todosOsObjetos[i].módulo.toUpperCase())
   console.log("Carga Horária: "+todosOsObjetos[i].cargaHorária)
   console.log("Avaliação: "+todosOsObjetos[i].avaliação)
   console.log("Dados necessários: "+todosOsObjetos[i].dadosDoUsuário.join(", "))
}

//2. Ainda no relatório, altere-o para que ele seja criado utilizando laços.
//Ou seja, você não deve mais imprimir individualmente cada item do relatório.
//Cada item deve ser exibido a partir de uma iteração do laço.
//Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

//let cars = [
//   {
//     "color": "purple",
//     "type": "minivan",
//     "registration": new Date('2017-01-03'),
//     "capacity": 7
//   },
//   {
//     "color": "red",
//     "type": "station wagon",
//     "registration": new Date('2018-03-03'),
//     "capacity": 5
//   }
// ];
 
 //ANTES 
// console.log("color: "+cars[0].color);
// console.log("type: "+cars[0].type);
// console.log("registration: "+cars[0].registration);
// console.log("capacity: "+cars[0].capacity);
 
// console.log("----------------------");
 
// console.log("color: "+cars[1].color);
// console.log("type: "+cars[1].type);
// console.log("registration: "+cars[1].registration);
// console.log("capacity: "+cars[1].capacity);
 
// //DEPOIS
// for(car of cars){
//     for (propriedade in car){
//         console.log(`${propriedade}: ${car[propriedade]}`)
//     }
// console.log("----------------------");
// }


//3. Crie uma função que receba como parâmetro um objeto,
//e devolva a string do relatório com os dados do objeto.


for(cronograma of todosOsObjetos) {
   for (propriedade in cronograma) {
      console.log(`${propriedade}: ${cronograma[propriedade]}`)
   }
   console.log("----------------------------------------------")
}


function todosOsCursosDeReciclagem (adicionandoDados) {
   dadosDoUsuário.push('CPF') //Adicionando mais uma informação a dadosDoUsuário: CPF.
   console.log(dadosDoUsuário)
}
todosOsCursosDeReciclagem (dadosDoUsuário[i])



//4. Crie uma função que recebe um array de objetos e uma string.
//Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro.
//Caso não exista um item,
//exiba um ALERT indicando que nenhum item foi encontrado

const filtro = todosOsObjetos.filter(function(dados) {
   return dadosDoUsuário[i] === dadosDoUsuário[CPF] ? console.log("Documento encontrado.") : alert("Item não encontrado.")
})
