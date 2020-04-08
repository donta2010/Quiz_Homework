var startQuizEl = document.querySelector("#startQuiz");
var currentSeconds = document.querySelector("#timer");
startQuizEl.addEventListener("click",question);
var initialsEl = document.querySelector("#submitInitials");
var GoBack = document.querySelector("#goBack");
var ClearHighScoreIn = document.querySelector("#clearHighScore");
var timeinterval;
var clearTimeOut;
currentSeconds =25;

//timeEl.innerHtml = currentSeconds;
function question(){
    currentSeconds = 25;
    document.getElementById("timer").style.display="block";
    document.getElementById("First").style.display="none"; 
    document.getElementById("allDone").style.display="none";
    document.getElementById("Final").style.display="none";
	document.getElementById("Q1").style.display="block";
}
function tick(){
if(currentSeconds>0)
{
    currentSeconds--;
    clearTimeOut =setTimeout(tick, 1000)
    console.log(currentSeconds);
    document.getElementById("timer").innerHTML = currentSeconds}
if(currentSeconds<=0)
    {
    document.getElementById("timer").style.display="none";
    document.getElementById("First").style.display="none"; 
    document.getElementById("Q1").style.display="none"; 
    document.getElementById("Q2").style.display="none"; 
    document.getElementById("Q3").style.display="none"; 
    document.getElementById("Q4").style.display="none"; 
    document.getElementById("Q5").style.display="none"; 
    document.getElementById("allDone").style.display="block";
    document.getElementById("score!").innerHTML= "Your score is 0"}

}

startQuizEl.addEventListener("click",tick);

var q1a = document.querySelector("#Q1A");
var q1b = document.querySelector("#Q1B");
var q1c = document.querySelector("#Q1C");
var q1d = document.querySelector("#Q1D");

q1a.addEventListener("click",question1correct)
q1b.addEventListener("click",question1)
q1c.addEventListener("click",question1)
q1d.addEventListener("click",question1)

// Function
function question1correct(){

    document.getElementById("answerQ1").innerHTML = "Correct!"; 
    setTimeout(function(){
    document.getElementById("Q1").style.display="none"; 
    document.getElementById("Q2").style.display="block";},1000);

}
function question1(){
    document.getElementById("answerQ1").innerHTML = "Wrong.";
    if(currentSeconds>15){
    currentSeconds = currentSeconds -15;
    setTimeout(function(){
    document.getElementById("Q1").style.display="none"; 
	document.getElementById("Q2").style.display="block";},1000);
  
}
    else if(currentSeconds<15){
    currentSeconds =0;
    document.getElementById("timer").innerHTML =currentSeconds;

    document.getElementById("answerQ1").innerHTML = "Wrong.";
    setTimeout(function(){
    document.getElementById("timer").style.display="none";
    document.getElementById("score!").innerHTML= "Your score is 0"
    document.getElementById("First").style.display="none"; 
    document.getElementById("Q1").style.display="none"; 
    document.getElementById("Q2").style.display="none"; 
    document.getElementById("Q3").style.display="none"; 
    document.getElementById("Q4").style.display="none"; 
    document.getElementById("Q5").style.display="none"; 
    document.getElementById("allDone").style.display="block";},1000)
    
}}
var q2a = document.querySelector("#Q2A");
var q2b = document.querySelector("#Q2B");
var q2c = document.querySelector("#Q2C");
var q2d = document.querySelector("#Q2D");

q2a.addEventListener("click",question2correct)
q2b.addEventListener("click",question2)
q2c.addEventListener("click",question2)
q2d.addEventListener("click",question2)
// Function
function question2correct(){
    document.getElementById("answerQ2").innerHTML ="Correct"
    setTimeout(function(){
    document.getElementById("Q2").style.display="none"; 
	document.getElementById("Q3").style.display="block";},1000)
  
}
function question2(){
    document.getElementById("answerQ2").innerHTML ="wrong"
    if (currentSeconds>15)
    { currentSeconds = currentSeconds -15;
    setTimeout(function(){
    document.getElementById("Q2").style.display="none"; 
    document.getElementById("Q3").style.display="block";},1000);}
    
    else if(currentSeconds<15){
        currentSeconds =0;
        document.getElementById("timer").innerHTML =currentSeconds;
    
        document.getElementById("answerQ1").innerHTML = "Wrong.";
        setTimeout(function(){
        document.getElementById("timer").style.display="none";
        document.getElementById("score!").innerHTML= "Your score is 0"
        document.getElementById("First").style.display="none"; 
        document.getElementById("Q1").style.display="none"; 
        document.getElementById("Q2").style.display="none"; 
        document.getElementById("Q3").style.display="none"; 
        document.getElementById("Q4").style.display="none"; 
        document.getElementById("Q5").style.display="none"; 
        document.getElementById("allDone").style.display="block";},1000)
        
    }
    
  
}
function question3correct(){
    document.getElementById("answerQ3").innerHTML ="Correct"
    setTimeout(function(){
    document.getElementById("Q3").style.display="none"; 
	document.getElementById("Q4").style.display="block";},1000);
  
}
var q3a = document.querySelector("#Q3A");
var q3b = document.querySelector("#Q3B");
var q3c = document.querySelector("#Q3C");
var q3d = document.querySelector("#Q3D");

q3a.addEventListener("click",question3correct)
q3b.addEventListener("click",question3)
q3c.addEventListener("click",question3)
q3d.addEventListener("click",question3)
// Function
function question3(){
    if (currentSeconds>15){
    document.getElementById("answerQ3").innerHTML ="wrong"
    currentSeconds = currentSeconds -15;
    setTimeout(function(){
    document.getElementById("Q3").style.display="none"; 
    document.getElementById("Q4").style.display="block";},1000);}
    
    else if(currentSeconds<15){
        currentSeconds =0;
        document.getElementById("timer").innerHTML =currentSeconds;
    
        document.getElementById("answerQ3").innerHTML = "Wrong.";
        setTimeout(function(){
        document.getElementById("timer").style.display="none";
        document.getElementById("score!").innerHTML= "Your score is 0";
        document.getElementById("First").style.display="none"; 
        document.getElementById("Q1").style.display="none"; 
        document.getElementById("Q2").style.display="none"; 
        document.getElementById("Q3").style.display="none"; 
        document.getElementById("Q4").style.display="none"; 
        document.getElementById("Q5").style.display="none"; 
        document.getElementById("allDone").style.display="block";},1000)
        
    }
}
function question4correct(){
    document.getElementById("answerQ4").innerHTML ="Correct"
    setTimeout(function(){
    document.getElementById("Q4").style.display="none"; 
	document.getElementById("Q5").style.display="block";},1000);
  
}
var q4a = document.querySelector("#Q4A");
var q4b = document.querySelector("#Q4B");
var q4c = document.querySelector("#Q4C");
var q4d = document.querySelector("#Q4D");

q4a.addEventListener("click",question4correct)
q4b.addEventListener("click",question4)
q4c.addEventListener("click",question4)
q4d.addEventListener("click",question4)
// Function
function question4(){
    if (currentSeconds>15){
    document.getElementById("answerQ4").innerHTML ="wrong"
    currentSeconds = currentSeconds -15;
    setTimeout(function(){
    document.getElementById("Q4").style.display="none"; 
	document.getElementById("Q5").style.display="block";},1000);}
 
    else if(currentSeconds<15){
        currentSeconds =0;
        document.getElementById("timer").innerHTML =currentSeconds;
    
        document.getElementById("answerQ1").innerHTML = "Wrong.";
        setTimeout(function(){
        document.getElementById("timer").style.display="none";
        document.getElementById("score!").innerHTML= "Your score is 0";
        document.getElementById("First").style.display="none"; 
        document.getElementById("Q1").style.display="none"; 
        document.getElementById("Q2").style.display="none"; 
        document.getElementById("Q3").style.display="none"; 
        document.getElementById("Q4").style.display="none"; 
        document.getElementById("Q5").style.display="none"; 
        document.getElementById("allDone").style.display="block";},1000)
        
    }    
}

var q5a = document.querySelector("#Q5A");
var q5b = document.querySelector("#Q5B");
var q5c = document.querySelector("#Q5C");
var q5d = document.querySelector("#Q5D");

q5a.addEventListener("click",question5correct)
q5b.addEventListener("click",question5)
q5c.addEventListener("click",question5)
q5d.addEventListener("click",question5)
// Function
function question5correct(){
    document.getElementById("answerQ5").innerHTML ="Correct"
    setTimeout(function()
    {
    document.getElementById("Q5").style.display="none"; 
    document.getElementById("allDone").style.display="block";},1000)
    document.getElementById("timer").style.display="none";
    document.getElementById("score!").innerHTML= "Your score is " + currentSeconds;
    clearTimeout(clearTimeOut);
    console.log(currentSeconds);
}
function question5(){
    if (currentSeconds>15){
    document.getElementById("answerQ5").innerHTML ="wrong"
    currentSeconds = currentSeconds -15;
    setTimeout(function(){
    document.getElementById("timer").style.display="none";
    document.getElementById("Q5").style.display="none"; 
    document.getElementById("allDone").style.display="block";},1000)
    document.getElementById("timer").innerHTML=currentSeconds;
    document.getElementById("score!").innerHTML= "Your score is "+currentSeconds;
    clearTimeout(clearTimeOut);}
    else if(currentSeconds<15){
        currentSeconds =0;
        document.getElementById("answerQ5").innerHTML = "Wrong.";
        setTimeout(function(){
        document.getElementById("timer").style.display="none";
        document.getElementById("score!").innerHTML= "Your score is 0"
        document.getElementById("First").style.display="none"; 
        document.getElementById("Q1").style.display="none"; 
        document.getElementById("Q2").style.display="none"; 
        document.getElementById("Q3").style.display="none"; 
        document.getElementById("Q4").style.display="none"; 
        document.getElementById("Q5").style.display="none"; 
        document.getElementById("allDone").style.display="block";},1000)
        
    }

}
initialsEl.addEventListener("click",SubmitInitial)
function SubmitInitial() {
    //var text = document.getElementById("initials").value; //.value gets input values
    //First things first, we need our text:
    var node = document.createElement("Li");
    var text = document.getElementById("initials").value; 
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("listHigh").appendChild(node)
    document.getElementById("allDone").style.display="none";
    document.getElementById("Final").style.display="block";
}
// GoBack.addEventSListener("click",);
function clearList(){
    var listsEl = document.getElementById("listHigh")
    listsEl.innerHTML="";
}
ClearHighScoreIn.addEventListener("click",clearList)
GoBack.addEventListener("click",Restart)

    function Restart(){
    document.getElementById("answerQ1").innerHTML="";
    document.getElementById("answerQ2").innerHTML="";
    document.getElementById("answerQ3").innerHTML="";
    document.getElementById("answerQ4").innerHTML="";
    document.getElementById("answerQ5").innerHTML="";
    document.getElementById("score!").innerHTML= "";
    document.getElementById("Final").style.display="none";
    document.getElementById("First").style.display="block";
}
