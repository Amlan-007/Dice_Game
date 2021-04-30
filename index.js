//first dice
var randomNumber1=Math.floor(Math.random()*6+1);//1-6
var randomdice1="images/dice"+randomNumber1+".png";//dice1-dice6.png
document.querySelectorAll("img")[0].setAttribute("src",randomdice1);

//second dice
var randomNumber2=Math.floor(Math.random()*6+1);//1-6
var randomdice2="images/dice"+randomNumber2+".png";//dice1-dice6.png
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);

//player win
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else
{
  document.querySelector("h1").innerHTML="Draw!";
}
