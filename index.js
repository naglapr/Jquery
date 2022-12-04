/*$(document).ready(function(){
    var ele=$("h1").css("color","red");
    console.log(ele);
});*/

document.querySelector("button").addEventListener("click", function(){
    
    let dice1=Math.floor(Math.random()*6)+1;
    let dice2=Math.floor(Math.random()*6)+1;
    
    document.querySelector("#dice1").src="Images/dice"+dice1+".png";
    document.querySelector("#dice2").setAttribute("src","Images/dice"+dice2+".png");

    let x=document.querySelector("h1");
    console.log(x);

    if(dice1 > dice2){
        document.querySelector("h1").innerText="Player 1 Wins";
    }else if(dice1 < dice2){
        document.querySelector("h1").innerText="Player 2 Wins";
    }else{
        document.querySelector("h1").innerText="DRAW";
    } 
});

