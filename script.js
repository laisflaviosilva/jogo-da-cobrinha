let canvas = document.getElementById("snake")
let context = canvas.getContext("2d") //renderiza o desenho no canvas
let box = 32 // tamanho do box

function criarBG(){
    context.fillStyle = "lightgreen" //definindo a cor no background
    context.fillRect(0, 0, 16 * box, 16 * box) //desenha o retangulo do jogo. Parametros Posição x e y, altura e largura
}

criarBG()