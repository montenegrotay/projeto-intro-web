//SEMANA 03
//1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
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

const objeto1 = {
    módulo1: "Legislação de Trânsito",
    cargaHorária1: 12,
    avaliação1: true 
 }
 
 const objeto2 = {
   módulo2: "Direção Defensiva",
   cargaHorária2: 8,
   avaliação2: true
 }
 
 const objeto3 = {
  módulo3: "Noções de Primeiros Socorros",
  cargaHorária3: 4,
  avaliação3: true,
 }
 
 const objeto4 = {
  módulo4: "Relacionamento Interpessoal",
  cargaHorária4: 6,
  avaliação4: true


  const todosOsObjetos = []
  console.log(todosOsObjetos)

  todosOsObjetos.push(objeto1, objeto2, objeto3, objeto4)


  if(checarAvaliação == true) {
    console.log("Você foi Aprovado!", todosOsObjetos.push())
    /*Se todas as avaliações forem true, o usuário foi aprovado*/
 } else if (checarAvaliação == false) {
    console.log(alert("Você foi reprovado, refaça suas avaliações!"))
    /*Se alguma avaliação for false, o usuário está reprovado*/
 }

//2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
//ANTES 
//console.log(elementos[0].item);

//DEPOIS
//FULANO
//for(elemento in elementos){
//  console.log(elemento.item);
//}


//3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.


//4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
