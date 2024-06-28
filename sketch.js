//variaveis da bolinha
let colidiu = false;
let bolinhaY = 300
 let bolinhaX = 200
 let diametro = 30
 let raio = diametro /2;
 
 //variaveis da velocidade da bolinha
 let velocidadeBolinhaX = 5
 let velocidadeBolinhaY = 5
 
 //variaveis da raquete
   let raqueteX = 5;
   let raqueteY = 150;
   let raqueteComprimento = 10
   let raqueteAltura = 90
 
//variáveis do oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let chanceDeErrar = 0;


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background("blue");
  mostrabolinha();
  movimentabolinha();
 verificaColisaoborda();
  movimentaMinhaRaquete()
 mostraRaquete(raqueteX, raqueteY);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  verificaColisaoRaquete(raqueteX, raqueteY)
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
 movimentaRaqueteOponente()
 incluiPlacar()
  marcarPontos()
  
  
}
 function mostrabolinha(){
  circle(bolinhaX, bolinhaY, raio)
   fill ("black")
 }
 function movimentabolinha(){
  bolinhaX += velocidadeBolinhaX;
  bolinhaY += velocidadeBolinhaY;
}
 function verificaColisaoborda(){
  if (bolinhaX + raio > width || bolinhaX - raio < 0){
   velocidadeBolinhaX *= -1;
  }  
  if (bolinhaY + raio > height || bolinhaY - raio < 0) {
    velocidadeBolinhaY *= -1;
  }
 }
  function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}
    
     function movimentaMinhaRaquete() {
      
       if(keyIsDown(UP_ARROW)){
         raqueteY -= 10;
         
       }
       if(keyIsDown(DOWN_ARROW)) {
        raqueteY += 10;
         
       }
     }
       
      function verificaColisaoRaquete() {
       
       if (bolinhaX - raio < raqueteX + raqueteComprimento
          && bolinhaY - raio < raqueteY + raqueteAltura
          && bolinhaY + raio > raqueteY)
         velocidadeBolinhaX *= -1;
        raquetada.play();
      }

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, bolinhaX, bolinhaY, raio);
    if (colidiu){
        velocidadeBolinhaX *= -1;
      raquetada.play();
    }
}

   function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
      calculaChanceDeErrar()
    }
}

  function incluiPlacar() {
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}
  function marcarPontos() {
    if (bolinhaX > 585) {
    meusPontos += 1;
      ponto.play();
  }
 if (bolinhaX < 15) {
   pontosDoOponente += 1;
   ponto.play();
 } 
  }

 function incluirPlacar(){
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
  function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
    function bolinhaNaoFicaPresa(){
    if (bolinhaX - raio < 0){
    bolinhaX = 23
    }
    }

  }
  }  
 //variaveis da bolinha
let colidiu = false;
let bolinhaY = 300
 let bolinhaX = 200
 let diametro = 30
 let raio = diametro /2;
 
 //variaveis da velocidade da bolinha
 let velocidadeBolinhaX = 5
 let velocidadeBolinhaY = 5
 
 //variaveis da raquete
   let raqueteX = 5;
   let raqueteY = 150;
   let raqueteComprimento = 10
   let raqueteAltura = 90
 
//variáveis do oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let chanceDeErrar = 0;


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background("blue");
  mostrabolinha();
  movimentabolinha();
 verificaColisaoborda();
  movimentaMinhaRaquete()
 mostraRaquete(raqueteX, raqueteY);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  verificaColisaoRaquete(raqueteX, raqueteY)
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
 movimentaRaqueteOponente()
 incluiPlacar()
  marcarPontos()
  
  
}
 function mostrabolinha(){
  circle(bolinhaX, bolinhaY, raio)
   fill ("black")
 }
 function movimentabolinha(){
  bolinhaX += velocidadeBolinhaX;
  bolinhaY += velocidadeBolinhaY;
}
 function verificaColisaoborda(){
  if (bolinhaX + raio > width || bolinhaX - raio < 0){
   velocidadeBolinhaX *= -1;
  }  
  if (bolinhaY + raio > height || bolinhaY - raio < 0) {
    velocidadeBolinhaY *= -1;
  }
 }
  function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}
    
     function movimentaMinhaRaquete() {
      
       if(keyIsDown(UP_ARROW)){
         raqueteY -= 10;
         
       }
       if(keyIsDown(DOWN_ARROW)) {
        raqueteY += 10;
         
       }
     }
       
      function verificaColisaoRaquete() {
       
       if (bolinhaX - raio < raqueteX + raqueteComprimento
          && bolinhaY - raio < raqueteY + raqueteAltura
          && bolinhaY + raio > raqueteY)
         velocidadeBolinhaX *= -1;
        raquetada.play();
      }

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, bolinhaX, bolinhaY, raio);
    if (colidiu){
        velocidadeBolinhaX *= -1;
      raquetada.play();
    }
}

   function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
      calculaChanceDeErrar()
    }
}

  function incluiPlacar() {
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}
  function marcarPontos() {
    if (bolinhaX > 585) {
    meusPontos += 1;
      ponto.play();
  }
 if (bolinhaX < 15) {
   pontosDoOponente += 1;
   ponto.play();
 } 
  }

 function incluirPlacar(){
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
  function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
    function bolinhaNaoFicaPresa(){
    if (bolinhaX - raio < 0){
    bolinhaX = 23
    }
    }

  }
  }  
 