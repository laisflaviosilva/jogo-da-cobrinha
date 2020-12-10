let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o desenho no canvas
let box = 32 // tamanho do box
let snake = [];
snake[0]={
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "lightgreen"; //definindo a cor no background
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retangulo do jogo. Parametros Posição x e y, altura e largura
}

function criarCobrinha(){
    for(i=0; i< snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

criarBG();
criarCobrinha();