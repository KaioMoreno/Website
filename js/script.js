let a = document.querySelector("#h1-text");
let b = a.innerHTML
let interval = 120;
 
a.innerHTML= "";

function showText(a, b, interval) {

    let char = b.split("").reverse();

    // console.log(char);

    let typer = setInterval(() => {

        if(!char.length) {
            return clearInterval(typer);
        }

        let next = char.pop();
        
        // console.log(next);


        a.innerHTML += next;
        
    },interval);
    
}    

showText(a, b , interval);

// LEMBRETE: FAÇA DOCUMENTAÇÃO DO CODIGO E REFAÇA O CODIGO NOVAMENTE PARA APRENDER E FIXAR O CONTEÚDO E TAMBEM ESTUDAR ARROW FUNCTIONS