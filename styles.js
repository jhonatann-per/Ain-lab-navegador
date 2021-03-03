//FUNCTION QUE VAI ADICIONAR A BOLA NA TELA
function addBola(){
    //criando o elemento novo "bola" e armazenando na variável.
    var bola = document.createElement("div");
    //adicionando a "class com o valor bola"
    bola.setAttribute("class", "bola");
    // criando duas funções que vão gerar números aleatórios 
    //E usando "math.random: gera um número aleatório decimal"
    //E "math.Flor" que vai transformar o número decimal em inteiro
    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);
    //setando um ccs livre com alguns atributos:
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    //criando a ação de click :
    bola.setAttribute("onclick", "estourar(this)");
    //Colocando o elemento "bola" na tela
    document.body.appendChild(bola);
}
//Function pra estourar as bolinha passando como elemento
function estourar(elemento){
    //aqui vamos remover o elemento "bola" da tela
    document.body.removeChild(elemento);
}//criando function "iniciar" que vai iniciar com o onload
function iniciar (){
    //aqui vamos setar um intervalo que vai aparecer a bola na tela
    //esta em meio segundo
    setInterval(addBola, 500);
}