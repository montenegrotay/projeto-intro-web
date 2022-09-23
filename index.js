//  SEMANA 1
//Curso de Reciclagem para Condutores Infratores
//Informação
//Inscrição
//Conteúdo Programático
//Estudo
//Certificado



//1. Para o item que você decidiu, pense nas características que são importantes para construí-lo.
//Vamos usar estas características para definir exemplos destes objetos usando o código.
//Você precisará criar pelo menos:
//  * uma característica String;
//  * uma característica Number;
//  * uma característica Boolean;

const curso = "Reciclagem" //string
const duraçãoDoCurso = 30 //number
const certificado = true //boolean



//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. 
//Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const módulo1 = "Legislação de Trânsito" //string
const cargaHorária1 = 12 //number
const avaliação1 = true //boolean

const módulo2 = "Direção Defensiva" //string
const cargaHorária2 = 8 //number
const avaliação2 = true //boolean

const módulo3 = "Noções de Primeiros Socorros" //string
const cargaHorária3 = 4 //number
const avaliação3 = true //boolean

const módulo4 = "Relacionamento Interpessoal" //string
const cargaHorária4 = 6 //number
const avaliação4 = true //boolean


//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
//A média deve ser igual à soma dos itens, dividida pelo total de itens.

const somaTotalDaCargaHorária = cargaHorária1 + cargaHorária2 + cargaHorária3 + cargaHorária4 / 3
console.log(somaTotalDaCargaHorária)


//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const checarAvaliação = avaliação1 && avaliação2 && avaliação3 && avaliação4
console.log(checarAvaliação)


//5. Crie pelo menos mais uma característica para o item que você criou. 
//Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const dadosDoUsuário = ["Nome do Aluno", "Idade", "Email", "Data de Nascimento"]


//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//  a) O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

console.log(`O Módulo 01: ${módulo1.toUpperCase()} \nCarga Horária: ${cargaHorária1}\nConcluído: ${avaliação1}`)
console.log(`O Módulo 02: ${módulo2.toUpperCase()} \nCarga Horária: ${cargaHorária2}\nConcluído: ${avaliação2}`)
console.log(`O Módulo 03: ${módulo3.toUpperCase()} \nCarga Horária: ${cargaHorária3}\nconcluído: ${avaliação3}`)
console.log(`O Módulo 04: ${módulo4.toUpperCase()} \nCarga Horária: ${cargaHorária4}\nconcluído: ${avaliação4}`)


// SEMANA 02
//1. Transforme os itens que criamos nas últimas semanas em objetos.

const objeto1 = {
   módulo: "Legislação de Trânsito",
   cargaHorária: 12,
   avaliação: true,
   dadosDoUsuário: ["Nome do Aluno", "Idade", "Email", "Data de Nascimento"],
}

const objeto2 = {
  módulo: "Direção Defensiva",
  cargaHorária: 8,
  avaliação: true,
  dadosDoUsuário: ["Nome do Aluno", "Idade", "Email", "Data de Nascimento"],
}

const objeto3 = {
 módulo: "Noções de Primeiros Socorros",
 cargaHorária: 4,
 avaliação: true,
 dadosDoUsuário: ["Nome do Aluno", "Idade", "Email", "Data de Nascimento"]
}

const objeto4 = {
 módulo: "Relacionamento Interpessoal",
 cargaHorária: 6,
 avaliação: true,
 dadosDoUsuário: ["Nome do Aluno", "Idade", "Email", "Data de Nascimento"],
}

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const todosOsObjetos = []


//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

todosOsObjetos.push(objeto1, objeto2, objeto3, objeto4)
   
console.log(todosOsObjetos)

//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push.


if(checarAvaliação == true) {
   console.log("Você foi Aprovado!", todosOsObjetos.push())
   /*Se todas as avaliações forem true, o usuário foi aprovado*/
} else if (checarAvaliação == false) {
   console.log(alert("Você foi reprovado, refaça suas avaliações!"))
   /*Se alguma avaliação for false, o usuário está reprovado*/
}

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

function buscandoDados (todosOsObjetos) {
   if (todosOsObjetos == "Legislação de Trânsito" , "Direção Defensiva", "Noções de Primeiros Socorros" , "Relacionamento Interpessoal") {
      console.log("Curso Localizado")
   } else {
      console.log(alert("Material não encontrado."))
   }
 
} 
buscandoDados(todosOsObjetos)


