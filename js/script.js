
/*
onclick => disparado quando recebe um click
ondblclick => disparado quando click duplo
onmouseover => disparado quando o mouse está sobre
onmouseout => disparado quando o mouse sai do objeto
onmousemove => disparado quando o mouse é movido no elemento
onmousedown => disparado quando o click do botão for pressionado
onmouseup = > disparado quando o click do mouse é solto
onfocus => disparado quando o elemento recebe o foco. Válido para input
onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
onblur => disparado quando o elemento perde o foco
onkeydown => disparado quando uma tecla é pressionada 
onkeypress => disparado quando uma tecla é pressionada e solta
onkeyup => disparado quando uma tecla é solta sobre o elemento
onload => disparado quando a página terminou de ser carregada. Body
onresize => disparado quando há um redimencionamento da janela
*/


document.getElementById("texto").innerHTML=
"Meu primeiro texto <b>JS</b>!";

alert("Exibindo texto com o alerta");


console.log("oi isso é um console.log");

let a,b,c;a=5;b=6;c=7;



//funções 
//função de soma

function soma(valor1, valor2){
    return valor1 + valor2;
}
//função do dolar 
function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}

//hello
function alertHello(){
    alert("Olá pessoal");
}
//objetos

const  carro = {marca: "ford", modelo :"ka",
    ano: 2025, placa:"ABC-VER3",
     buzina: function(){
        alert('Biiiiiiiiiii')
    }, 
    completo: function(){
        return "A marca é "+ this.marca+ " e modelo é "+this.modelo
    }
    };

    
function eventoClick(){
    document.body.style.backgroundColor ="yellow"
 }

function eventoDblclick(){
    alert("Evento de clique duplo");
}
carro.buzina();
console.log(carro.completo)

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor ="red";
}
function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor ="blue";
}
function adicionaTexto(){
    let p = document.getElementById("teste");
    p.append('O mouse moveu<br>');
}
function limpaTexto(){
    document.getElementById("campoTexto").value =" ";
}