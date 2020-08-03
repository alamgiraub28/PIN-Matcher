
//Notifiy Section Display None
document.getElementById("pinDontMatch").style.display = "none";
document.getElementById("pinMatch").style.display = "none";

//Generate PIN
inputBtn = document.getElementById("generateBtn");
inputBtn.addEventListener('click', function randomNumber(len){
 function randomNumber(len){
var randomNumber;
var n = '';

for(var count = 0; count < len; count++) {
 randomNumber = Math.floor(Math.random() * 10);
 n += randomNumber.toString();
}
return n;
}

document.getElementById("inputNum").value = randomNumber(4);
})
   
// Submit button Operation
const submitBtn= document.getElementById("submitBtn");
submitBtn.addEventListener("click", function(){
  
const generateNum = document.getElementById("inputNum").value;
const submitNum = document.getElementById("screenBtn").value;

if(generateNum == submitNum){
    document.getElementById("pinMatch").style.display= "block";
    document.getElementById("pinDontMatch").style.display= "none";
}

else{
    document.getElementById("pinDontMatch").style.display= "block";
    document.getElementById("pinMatch").style.display= "none";

    }
    
})
