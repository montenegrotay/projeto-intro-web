const capturaValores = () => {
    const busca = document.getElementById("#search-btn")
    console.log(busca.value)
    busca.value="search-btn"
 }

 const valorDoInput = () => {
    const respostaDoInput = document.getElementById("#searchbar")
    console.log(respostaDoInput.value)
}

// ------------------------------------- DOM ------------------------------------------- //

// Criando um array de objetos, com todas as informações sobre o curso.

const reciclagem = [
    {
        módulo: "Legislação de Trânsito",
        cargaHorária: 12,
        avaliação: true,
        dadosDoUsuário: ["Nome do Aluno", "Email", "Data de Nascimento", "CPF"],
    },

    {
        módulo: "Direção Defensiva",
        cargaHorária: 8,
        avaliação: true,
        dadosDoUsuário: ["Nome do Aluno", "Email", "Data de Nascimento", "CPF"],
     },

    {
        módulo: "Noções de Primeiros Socorros",
        cargaHorária: 4,
        avaliação: true,
        dadosDoUsuário: ["Nome do Aluno", "Email", "Data de Nascimento", "CPF"]
    },

    {
        módulo: "Relacionamento Interpessoal",
        cargaHorária: 6,
        avaliação: true,
        dadosDoUsuário: ["Nome do Aluno", "Email", "Data de Nascimento", "CPF"],
    }
]

function cursoReciclagem() {
    let input = document.getElementById("searchbar").value
    input = input.toLowerCase();
    let x = document.getElementsByClassName("modulo");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";

        } 
    }

    if(input === "") {
        alert("Campo vazio ")
    }
}




