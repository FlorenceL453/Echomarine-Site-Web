var btnCercle = document.getElementsByClassName("button");
btnCercle = i= [0];
//const btnCercle = document.querySelector(".button.button")
const son = new Audio('/media/Son/horse (1).mp3');

console.log(btnCercle);

btnCercle.addEventListener('click', function(){
 son.play();
});
