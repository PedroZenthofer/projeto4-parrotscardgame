const board = document.querySelector(".container");
const imagens = ['bobrossparrot.gif','explodyparrot.gif','fiestaparrot.gif','metalparrot.gif','revertitparrot.gif','tripletsparrot.gif','unicornparrot.gif'];
let numCartas = 0;
let allCards = [];
let carta1, carta2 = null;
let numeroJogadas = 0;
let cartaEmPe = [];

function getRandom(){
    return Math.random() - 0.5;
}
function iterarHTML(){
    for(let i=0;i<numCartas;i++){
        board.innerHTML += allCards[i];
    }
}

iniciarJogo();

function iniciarJogo(){
    while(true){
        numCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número par de 4 a 14"));
        if(numCartas % 2 == 0 && numCartas>=4 && numCartas<=14){
            criarHtml();
            return false;
        }
    }
}

function criarHtml(){
    imagens.sort(getRandom);
    for(let i=0;i<numCartas/2;i++){
        let novaCarta = `<div class="carta">
            <div class="front show">
            <img src ="imagensgifs/front.png" alt="">
            </div>
            <div class="back">
            <img src ="imagensgifs/${imagens[i]}" alt="">
            </div>
        </div>`;
        allCards.push(novaCarta);
        allCards.push(novaCarta); 
        allCards.sort(getRandom);
    }iterarHTML();
}
function flipCard(){
    numeroJogadas++;
    this.classList.toggle("giro")
    this.classList.add('flipped');
    if(!carta1){
        carta1=this;
        return false;
    }
    carta2=this;
    comparar();
}
    const cards = document.querySelectorAll('.carta');
    cards.forEach(card => card.addEventListener('click',flipCard));

function comparar(){
    const cartasviradas = document.querySelectorAll('flipped');
    if(cartasviradas.legth===2){
        if(carta1.innerHTML==carta2.innerHTML){
        
        }else{
            cartasviradas.forEach((carta)=>{
            carta.classList.remove("flipped");
            setTimeout(()=> carta.classList.remove("giro"),2000);
        })
        }
    }
}