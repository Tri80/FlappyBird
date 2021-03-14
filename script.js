/*Hier machen wir die Variablen also Block und whole und setzen diese zu unseren whole and Block elements*/
var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

/*wir machen einen hole eventlistener hier wird es so gemacht das die Animation immer wieder ein neues Loch macht immer wenn ein neuer Block kommt, wir haben ein Math.random eingefügt um die Löcher variable zwischen -450 und -150 und 150 bis 450 zu machen */ 
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});

/* Wir machen eine Funktion die die Gravitation nachbildet sodass unser FlappyBird auch nach unten fällt, diese läuft jede 10 ms */

setInterval(function(){
    /*hier wird abgefragt wie groß der Charackter ist*/
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0)
    /*hier wird es gemacht das der Ball imer +5 top hat also immer veränder wird sodass der Ball fällt
    */
   {
        character.style.top = (characterTop+5)+"px";
    }
    //hier machen wir es so das man durch das Loch hüpfen kann ohne das das Spiel endet und machen es so wenn man einen Block trifft das das Spiel endet und man deinen Score sieht
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0;
    }
},10);
/* hier machen wir die Funktion jump */
function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            character.style.top = (characterTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}

