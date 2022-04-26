var randomvariable1 = Math.floor((Math.random()*6))+1;// 1-6
var randDice1 = "images/dice"+randomvariable1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randDice1);

var randomvariable2 = Math.floor((Math.random()*6))+1;// 1-6
var randDice2 = "images/dice"+randomvariable2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randDice2);

if(randomvariable1 > randomvariable2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomvariable1 < randomvariable2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}