var dice1 = Math.floor(Math.random()*6)+1;
var dice2 = Math.floor(Math.random()*6)+1;;

document.querySelectorAll(".dice img")[0].setAttribute("src", "images/dice"+dice1+".png");
document.querySelectorAll(".dice img")[1].setAttribute("src", "images/dice"+dice2+".png");
if(dice1 == dice2){
	document.querySelector(".container h1").textContent = "Draw";
}else if(dice1 > dice2){
	document.querySelector(".container h1").textContent = "Player 1 Win";
}else{
	document.querySelector(".container h1").textContent = "Player 2 Win";
}
