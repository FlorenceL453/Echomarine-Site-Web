const btnCercle = document.querySelector(".button1");
const son = new Audio('/media/Son/horse (1).mp3');
console.log(btnCercle);
btnCercle.addEventListener('click', function(){
 son.play();
});
