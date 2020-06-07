var ques1 =(questionNumber[0])"What is the role of CSS?"; //b
var ques2 =(questionNumber[1])"What are functions used for in JavaScript?"; //c
var ques3 =(questionNumber[2])"What is a Array used for?"; //d
var ques4 =(questionNumber[3])"JavaScript is a tool used for what?"; //a
var ques5 =(questionNumber[4])"What do Responsive Layouts do?"; //a 
var answers =[ "a", "b", "c", "d"];
var questionNumber = [ "1", "2", "3", "4", "5"];
var score = display.value("true")
var timeleft = 75;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 75 - timeleft;
  timeleft -= 1;
}, 1000);
console.log(ques1)
console.log(ques2)
console.log(ques3)
console.log(ques4)
console.log(ques5)
console.log(answers)
console.log(questionNumber)
console.log(timeleft)
console.log()
console.log()
function(ques1){
    if(user.click[1])
    return ="True";
     else{
        return ="False";
    }
};
function(ques2){
    if(user.click[2])
    return ="True";
     else{
        return ="False";
    }
};
function(ques3){
    if(user.click[3])
    return ="True";
     else{
        return ="False";
    }
};
function(ques4){
    if(user.click[0])
    return ="True";
     else{
        return ="False";
    }
};
function(ques5){
    if(user.click[0])
    return ="True";
     else{
        return ="False";
    }
};


