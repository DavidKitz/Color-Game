
const squares= document.getElementsByClassName("square");
const container= document.getElementById("container");
const spanwin=document.getElementById("win");
const spanMessage=document.querySelector("#message");
const btnMode=document.getElementsByClassName("mode");
const btnRepeat=document.getElementById("repeat");
let randomNum=function () {return Math.floor(Math.random()*255);};
let Store=[];
let numSQ=6;
let winner;

 function colorGenerator() {
    btnRepeat.addEventListener("click", colorGenerator);
    for (let i=0;i<squares.length;i++) {
        if (btnMode[i]){
         btnMode[i].addEventListener("click", btnMod);
            }
        squares[i].style.backgroundColor=colorIt(randomNum,randomNum,randomNum);
        Store[i]=squares[i].style.backgroundColor;
        squares[i].addEventListener("click",check);
    }  
    spanMessage.style.color="";
    spanMessage.innerHTML="";
    spanwin.parentNode.style.backgroundColor="";
    btnRepeat.innerHTML="New Colors";
    spanwin.innerHTML=winner;
    winner=squares[Math.floor(Math.random()*numSQ)].style.backgroundColor
    spanwin.innerHTML=winner;
}
function check() {
    if (this.style.backgroundColor===winner) {
        spanMessage.innerHTML="Correct!";
        spanMessage.style.color="green";
        btnRepeat.innerHTML="Play again!";
        spanwin.parentNode.style.backgroundColor=winner;
        for (let i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=winner;
        } }
    else {
        this.style.backgroundColor= window.getComputedStyle(document.body, null).getPropertyValue('background-color');
        spanMessage.innerHTML="Try Again"
    }
    
}
function colorIt(randomNum) {
    return "RGB("+randomNum()+","+randomNum()+","+randomNum()+")";
};
function difficulty () {
if (numSQ===3) {
    for (let i=3;i<squares.length;i++) {
        squares[i].style.display="none";
        }
}
else {
    for (let i=0;i<squares.length;i++) {
        squares[i].style.display="block";
         } 
}
    colorGenerator();
}
function btnMod () {
    for (let i=0;i<btnMode.length;i++) {
        btnMode[i].classList.remove("selected")   
     }
    this.classList.add("selected");
    this.textContent==="Easy Mode" ? numSQ=3: numSQ=6;
    winner=Store[Math.floor(Math.random()*numSQ)];
    spanwin.innerHTML=winner;
    difficulty();
}

colorGenerator();