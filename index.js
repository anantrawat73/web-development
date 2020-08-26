var randomNumber1=Math.floor((Math.random()*6)+1);
var randomIMage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomIMage;

var dice1=document.querySelectorAll("img")[0];
dice1.setAttribute("src", randomImageSource);

var randomNumber2=Math.floor((Math.random()*6)+1);
var randomIMage="dice"+randomNumber2+".png";
var randomImageSource="images/"+randomIMage;
var dice2=document.querySelectorAll("img")[1];
dice2.setAttribute("src", randomImageSource);

if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1")[1].innerHTML="THOUGHT  1 IT  IS !!";
}
else if(randomNumber1<randomNumber2){
    document.querySelectorAll("h1")[1].innerHTML="THOUGHT  2 IT  IS !!";
} 
else{
    document.querySelectorAll("h1")[1].innerHTML="ohh!!its a tough decision.lets go for best of 3";
}