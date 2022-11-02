const capturaValores = () => {
    const busca = document.getElementById("text")
    console.log(busca.value)
    busca.value=""
 }

 const valorDoInput = () => {
    const respostaDoInput = document.getElementById("text")
    console.log(respostaDoInput.value)
}

// DOM //

function addElement () {
    // Criando um elemento Div
    const newDiv = document.createElement("div");
  
    // Colocando conteúdo para a div
    const newContent = document.createTextNode("Oi! Tudo bem?");
  
    // Adicionando o conteúdo na div
    newDiv.appendChild(newContent);
  
    // Buscando a div existente para usar de referência
    const currentDiv = document.getElementById("div1");
  
    // Adicionando o elemento no DOM, e consequentemente, na página
    currentDiv.insertAdjacentElement('beforebegin', newDiv);
  }
  
  addElement();
